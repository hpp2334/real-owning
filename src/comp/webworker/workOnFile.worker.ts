import { codeAnalyzer, codeNormalizer } from '../../core';
import { TemplateFuncResult } from '../../core/codefile-normalizer/template';
import { SettingType } from '../../type/setting';
import { WorkOnCbsResult, WorkOnCbsResultPerProblem } from '../../type/workOnCbs';
import JSZip from 'jszip';
import * as transformEncoding from '../../util/transformCoding';

const ctx = self as any;

const notify = (evName: string, err: string | null, data: any) => {
  ctx.postMessage({
    evName,
    err,
    data,
  });
};

const preWorkOnFileContent = async (setting: SettingType, content: ArrayBuffer): Promise<TemplateFuncResult> => {
  const utils = { transformEncoding, zip: new JSZip() };
  if (setting.fileWork === 'SZUOJ-Log') {
    return await codeNormalizer.preset.szuojLog(content, utils);
  }
  if (setting.fileWork === 'vjudge.net') {
    return await codeNormalizer.preset.vjudgeNet(content, utils);
  }
  if (setting.fileWork === 'Customize') {
    try {
      const f = eval(setting.fileWorkCode || '');
      return await f(content);
    } catch (e) {
      throw new Error('Customize file work code error: ' + e.message);
    }
  }
  throw new Error('Unknown filework setting');
};

const workOnCodeBlocks = async (setting: SettingType, cbs: TemplateFuncResult): Promise<WorkOnCbsResult> => {
  const getWorker = () => {
    if (setting.checkSchema === 'Simple(C++)') {
      return codeAnalyzer.cpp.simple;
    }
    throw new Error('Unknown check schema');
  }

  let processRate = 0;

  const worker = getWorker();
  const problemIds = Array.from(new Set(cbs.map(ele => ele.problemId)));
  const result: WorkOnCbsResult = {};
  for (const problemId of problemIds) {
    const filteredCbs = cbs.filter(cb => cb.problemId === problemId);
    const resultInThisProblem: WorkOnCbsResultPerProblem = [];
    for (let i = 0; i < filteredCbs.length; i++) {
      for (let j = 0; j < i; j++) {
        if (filteredCbs[i].author !== filteredCbs[j].author) {
          const r: number = await worker(filteredCbs[i].code, filteredCbs[j].code);
          resultInThisProblem.push({
            a: filteredCbs[i],
            b: filteredCbs[j],
            rate: r,
            problemId,
          });
        }
        processRate += 1 / (filteredCbs.length * (filteredCbs.length - 1) / 2) / problemIds.length;
        notify('process-rate', null, processRate);
      }
    }
    result[problemId] = resultInThisProblem.sort((a, b) => b.rate - a.rate);
  }
  return result;
};

ctx.onmessage = async function(ev: any) {
  try {
    const [content, setting] = ev.data as [ArrayBuffer, SettingType];
    
    const cbs = await preWorkOnFileContent(setting, content);
    const result = await workOnCodeBlocks(setting, cbs);
    notify('done', null, result);
  } catch (e) {
    console.error('[WEB WORKER WORK_ON_FILE]', e);
    notify('error', e.message, null);
  }
}

export default null as any;
