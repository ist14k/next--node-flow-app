"use client";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const Page = () => {
  const trpc = useTRPC();
  const testAI = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI Test Successful");
      },
      onError: (error) => {
        toast.error("Failed " + error.message);
      },
    })
  );
  return (
    <div>
      <Button onClick={() => testAI.mutate()}>Test Subscription</Button>
    </div>
  );
};

export default Page;
