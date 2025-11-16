import { requireAuth } from "@/lib/auth-utils";
import React from "react";

const Page = async () => {
  await requireAuth();

  return (
    <div>
      <h1>Editor Dashboard Page</h1>
    </div>
  );
};

export default Page;
