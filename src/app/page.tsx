"use client";

import { Button } from "@/components/ui/button";
import LogoutButton from "@/features/test-components/logout-button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const page = () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflow.queryOptions());
  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: () => {
        toast.success("Workflow queued for creation");
      },
    })
  );

  const executeAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI execution event queued");
      },
    })
  );

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-2">
      <h1 className="text-4xl">Hello, World</h1>
      <div>{JSON.stringify(data)}</div>
      <div className="flex items-center gap-2">
        <Button
          disabled={executeAi.isPending}
          onClick={() => executeAi.mutate()}
        >
          Test AI
        </Button>
        <Button disabled={create.isPending} onClick={() => create.mutate()}>
          Create Workflow
        </Button>
        <LogoutButton />
      </div>
    </div>
  );
};

export default page;
