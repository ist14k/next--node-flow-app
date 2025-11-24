"use client";

import { memo, useState } from "react";
import { PlusIcon } from "lucide-react";
import { PlaceholderNode } from "./react-flow/placeholder-node";

import type { NodeProps } from "@xyflow/react";
import { WorkflowNode } from "./workflow-node";

export const InitialNode = memo((props: NodeProps) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  return showPlaceholder ? (
    <WorkflowNode>
      <PlaceholderNode {...props}>
        <div className="cursor-pointer flex items-center justify-center">
          <PlusIcon className="h-6 w-6" />
        </div>
      </PlaceholderNode>
    </WorkflowNode>
  ) : null;
});

InitialNode.displayName = "InitialNode";
