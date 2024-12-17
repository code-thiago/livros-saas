import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { findUserbyCredentials } from "./lib/user";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await findUserbyCredentials(
          credentials.email as string, 
          credentials.password as string
        );

        return user;
      },
    }),
  ],
});