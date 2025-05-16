//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const run_codeEval: EvalFunction = {
    name: "run_code Tool Evaluation",
    description: "Evaluates the run_code tool",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please run the following Python code in your sandbox: print('Hello from E2B sandbox')");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [run_codeEval]
};
  
export default config;
  
export const evals = [run_codeEval];