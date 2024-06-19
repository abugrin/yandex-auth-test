import NextAuth from "next-auth"
import Yandex from "next-auth/providers/yandex"
import type { Account, NextAuthConfig, User } from "next-auth"



export const config = {
    debug: true,
    theme: {
      logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    },
    providers: [
        Yandex,
    ],
    callbacks: {
      authorized({ request, auth }) {
        const { pathname } = request.nextUrl
        if (pathname === "/middleware-example") return !!auth
        return true
      },
      async session({session, token, user}) {
        console.log(">>> Session calback");
        console.log("AccountId: ", user);
        //session.user.providerAccountId = user.providerAccountId
        console.log(session);
        //session.user.id = token.id
        
        return session
      },
      signIn({account, user}) {
        console.log(">>> SignIn AccountId: ", account?.providerAccountId);
        user.providerAccountId = account?.providerAccountId;
        return true;
      }
    },
    
  } satisfies NextAuthConfig
  
  export const { handlers, auth, signIn, signOut } = NextAuth(config);
