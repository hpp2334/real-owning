import { TemplateFunc, CodeBlock } from '../template';

const f: TemplateFunc = async (_file, utils) => {
  const { transformEncoding, zip } = utils;
  const { files } = await zip.loadAsync(_file);
  const REG_PATH = /^(\w+)\/(\d+)_(\w+)_(\1)\..+$/;

  const result = await Promise.all(Object.keys(files).map<Promise<CodeBlock | null>>(async path => {
    const file = files[path];
    const code = await file.async('text');

    const regResult = REG_PATH.exec(path);
    if (regResult === null) {
      return null;
    }

    const [, problemId, , author, ] = regResult;
    const codeId = path;

    return {
      code,
      codeId,
      problemId,
      author,
    }
  })).then((arr) => arr.filter((x): x is CodeBlock => !!x));

  return result;
}

export default f;
