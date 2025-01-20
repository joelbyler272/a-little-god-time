import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GithubProvider from "next-auth/providers/github";

const prisma = new PrismaClient();

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add your authentication providers here
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
    // Add more providers as needed
  ],
  // Add any additional NextAuth configuration
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
