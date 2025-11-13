import LogoutButton from "@/features/test-components/logout-button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const page = async () => {
  await requireAuth();
  const data = await caller.getUsers();

  return (
    <div>
      <h1 className="text-4xl">Hello, World</h1>
      <div>{JSON.stringify(data)}</div>
      <LogoutButton />
    </div>
  );
};

export default page;
