import { decode } from '../../../util/transformCoding';
import { TemplateFunc, CodeBlock } from '../template';

const f: TemplateFunc = async (_file) => {
  const file = decode(_file, 'gbk');
  const chunks = file.split('------------------------------------------------------');
  const res = chunks.filter(x => !/^\s*$/.test(x)).map<CodeBlock>(chunk => {
    chunk = chunk.replace(/\r\n/g, '\n').trim();

    const statusRow = chunk.split('\n')[0];
    chunk = chunk.split('\n').slice(1).join('\n');

    const [schoolId, problemId, status] = statusRow.split(':');
    return {
      codeId: schoolId + '-' + problemId,
      code: chunk,
      problemId,
      status,
      author: schoolId,
    }
  });
  return res;
}

export default f;
