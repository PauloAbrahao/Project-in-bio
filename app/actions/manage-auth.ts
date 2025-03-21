"use server";

import { auth, signIn, signOut } from "../lib/auth";

export async function manageAuth() {
  const session = await auth();

  console.log('session', session);

  if (!session) {
    const res = await signIn("google", { redirectTo: "/criar" });

    console.log('res', res);
    return res
  }

  return await signOut({ redirectTo: "/" });
}