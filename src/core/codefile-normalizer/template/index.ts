import JSZip from 'jszip';
import * as transformEncoding from '../../../util/transformCoding';

export interface CodeBlock {
  codeId: string;
  problemId: string;
  code: string;
  status?: string;
  author: string;
}

export type TemplateFuncResult = Array<CodeBlock>;
export interface TemplateFuncUtils {
  zip: JSZip;
  transformEncoding: typeof transformEncoding;
}


export type TemplateFunc = (file: ArrayBuffer, utils: TemplateFuncUtils) => Promise<TemplateFuncResult>;

const f: TemplateFunc = async (file, utils) => {
  const { zip, transformEncoding } = utils;
  let result: TemplateFuncResult = [];
  // TODO SOMETHING...
  return result;
};

export default f;
