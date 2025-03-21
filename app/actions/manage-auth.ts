"use server";

import { auth, signIn, signOut } from "../lib/auth";

export async function manageAuth() {
    
    const session = await auth();
    
    if (!session) {
      const res = await signIn("google", { redirectTo: "/criar" });
      
      return res
    }
    
    return await signOut({ redirectTo: "/" });
}