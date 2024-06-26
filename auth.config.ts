import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs"
export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const matchPassword = await bcrypt.compare(
            password,
            user.password
          )

          if(matchPassword) return user
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
