import NextAuth from "next-auth"

declare module "next-auth" {

  interface Session {
    user: {
      providerAccountId?: string;
    } & DefaultSession["user"];
  
  }

  interface User {
      providerAccountId?: string;   
  }

  interface AdapterUser {
    providerAccountId?: string;   
}
}
