import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'read:user'
        }
      }
    }),
    // ...add more providers here
  ],

  callbacks: {
    async session({ session, user, token }) {
      try {
        return {
          ...session,
          id: token.sub
        }
      }catch {
        return {
          ...session,
          id: null
        }
      }
    },

    async signIn({ user, account, profile, email, credentials }) {
      return true 
    },
  }
})