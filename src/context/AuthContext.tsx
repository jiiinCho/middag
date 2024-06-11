"use client";

import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

/* Login user state context */
export default function AuthContext({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
