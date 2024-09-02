import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      console.log(session, "session");
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log(token, "token");
      return token;
    },
  },
});

export default handler;
