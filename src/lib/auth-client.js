import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://dragon-news-iota-eosin.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()