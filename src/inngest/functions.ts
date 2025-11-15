import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("fetching-data", "5s");
    await step.sleep("transcribing-data", "5s");
    await step.sleep("processing-data", "5s");
    await step.sleep("wait-a-moment", "10s");
    return { message: `Hello ${event.data.email}!` };
  }
);
