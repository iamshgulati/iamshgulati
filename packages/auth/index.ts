import Discord from "@auth/core/providers/discord";
import type { DefaultSession } from "@auth/core/types";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";

import { db, tableCreator } from "@shgulati/db";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: DrizzleAdapter(db, tableCreator),
  // @ts-expect-error error could be due to compatibility, check it later
  providers: [Discord],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
});
