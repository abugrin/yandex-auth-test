import NextAuth from "next-auth"
import Yandex from "next-auth/providers/yandex"
export const { 
    handlers: { GET, POST },
    auth
} = NextAuth({ providers: [ Yandex ] })

