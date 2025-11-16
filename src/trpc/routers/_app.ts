import { create } from "domain";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
import { inngest } from "@/inngest/client";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testAi: baseProcedure.mutation(async () => {
    await inngest.send({
      name: "test/execute.ai",
      data: {},
    });
    return { success: true, message: "AI execution event queued" };
  }),
  getWorkflow: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "istiak@example.com",
      },
    });
    return prisma.workflow.create({
      data: {
        name: "New Workflow",
        description: "This is a new workflow",
      },
    });
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
