import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";
import Image from "next/image";
import Link from "next/link";

const LoginPage = async () => {
  await requireUnauth();

  return <LoginForm />;
};

export default LoginPage;
