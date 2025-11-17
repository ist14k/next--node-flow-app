import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { checkout, portal, polar } from "@polar-sh/better-auth";
import prisma from "./prisma";
import { polarClient } from "./polar";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "cf171517-464f-4400-afd0-ce27227fc55e",
              slug: "NodeFlow-Pro",
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL,
          authenticatedUsersOnly: true,
        }),
        portal(),
      ],
    }),
  ],
  secret: process.env.BETTER_AUTH_SECRET!,
  baseUrl: process.env.BETTER_AUTH_URL!,
});
