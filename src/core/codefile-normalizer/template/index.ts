export interface CodeBlock {
  codeId: string;
  problemId: string;
  code: string;
  status?: string;
  author: string;
}

export type TemplateFuncResult = Array<CodeBlock>;

export type TemplateFunc = (file: ArrayBuffer) => Promise<TemplateFuncResult>;

const f: TemplateFunc = async (file) => {
  return [];
};

export default f;
