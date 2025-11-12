import prisma from "@/lib/prisma";
import { caller } from "@/trpc/server";

const page = async () => {
  const user = await caller.getUsers();
  return (
    <div>
      <h1 className="text-4xl">Hello, World</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default page;
