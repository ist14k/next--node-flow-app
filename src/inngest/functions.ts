import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

const googleAI = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();

export const executeAi = inngest.createFunction(
  { id: "execute-ai" },
  { event: "test/execute.ai" },
  async ({ event, step }) => {
    const { steps: geminiSteps } = await step.ai.wrap(
      "Generate text using Google Gemini",
      generateText,
      {
        model: googleAI("gemini-2.5-flash"),
        system: "You are a helpful assistant that generates creative text.",
        prompt: "Write a short poem about the sea.",
      }
    );
    const { steps: openaiSteps } = await step.ai.wrap(
      "Generate text using OpenAI GPT-4",
      generateText,
      {
        model: openai("gpt-4"),
        system: "You are a helpful assistant that generates creative text.",
        prompt: "Write a short poem about the sea.",
      }
    );
    const { steps: anthropicSteps } = await step.ai.wrap(
      "Generate text using Anthropic Claude",
      generateText,
      {
        model: anthropic("claude-2"),
        system: "You are a helpful assistant that generates creative text.",
        prompt: "Write a short poem about the sea.",
      }
    );

    return { geminiSteps, openaiSteps, anthropicSteps };
  }
);
