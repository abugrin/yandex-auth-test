import NextAuth from "next-auth"
import Yandex from "next-auth/providers/yandex"
import type { Account, NextAuthConfig, User } from "next-auth"



export const config = {
    debug: false,
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
      async session({session, token}) {
        //console.log(">>> Session calback");
        //console.log("AccountId: ", session.user.providerAccountId);
        //console.log("Token: ", token);
        session.user.providerAccountId = token.providerAccountId
        //console.log(session);
        //session.user.id = token.id
        
        return session
      },
      async jwt({ token, user, account }) {
        if (user && account) {
          //console.log("JWT user: ", user)
          //console.log("JWT account ", account)
          token.providerAccountId = account.providerAccountId; 
          
        }
        return token;
      },

      signIn({account, user}) {
        //console.log(">>> SignIn AccountId: ", account?.providerAccountId);
        user.providerAccountId = account?.providerAccountId;
        return true;
      }
    },
    
  } satisfies NextAuthConfig
  
  export const { handlers, auth, signIn, signOut } = NextAuth(config);
