import { TRPCClientError } from "@trpc/client";
import { useState } from "react";
import { UpgradeModal } from "@/components/upgrade-modal";

export const useUpgradeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleError = (err: unknown) => {
    if (err instanceof TRPCClientError) {
      // Check for specific error code or message indicating a need to upgrade
      if (err.data.code === "FORBIDDEN") {
        setIsOpen(true);
        return true;
      }
    }
    return false;
  };

  const modal = <UpgradeModal open={isOpen} onOpenChange={setIsOpen} />;

  return {
    handleError,
    modal,
  };
};
