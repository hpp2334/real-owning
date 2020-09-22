import { CodeBlock } from "../core/codefile-normalizer/template";

export interface PairAnalysisResult {
  a: CodeBlock;
  b: CodeBlock;
  rate: number;
  problemId: string;
}

export type WorkOnCbsResultPerProblem = PairAnalysisResult[];

export type WorkOnCbsResult = Record<string, WorkOnCbsResultPerProblem>;

