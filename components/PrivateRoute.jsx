"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function PrivateRoute({ children }) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const path = usePathname();

  // wait for the session first, so reload does not kick the user out
  useEffect(() => {
    if (!isPending && !session) router.replace(`/login?redirect=${path}`);
  }, [isPending, session, path, router]);

  if (isPending || !session) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="skeleton h-10 w-1/3 mb-6" />
        <div className="skeleton h-64 w-full" />
      </div>
    );
  }
  return children;
}