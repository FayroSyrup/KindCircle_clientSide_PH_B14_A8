"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  // where to go after login (set by the private route guard)
  const nextPage = () =>
    new URLSearchParams(window.location.search).get("redirect") || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    setBusy(true);
    const { error } = await authClient.signIn.email({ email: f.email, password: f.password });
    setBusy(false);
    if (error) return toast.error(error.message || "Wrong email or password");
    toast.success("Logged in successfully");
    router.push(nextPage());
  }

  async function googleLogin() {
    await authClient.signIn.social({ provider: "google", callbackURL: nextPage() });
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="card bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body gap-3">
          <h1 className="section-title">Welcome back</h1>
          <input name="email" type="email" required placeholder="Email" className="input input-bordered w-full" />
          <input name="password" type="password" required placeholder="Password" className="input input-bordered w-full" />
          <button disabled={busy} className="btn btn-primary">
            {busy ? <span className="loading loading-spinner" /> : "Login"}
          </button>
          <div className="divider my-0">or</div>
          <button type="button" onClick={googleLogin} className="btn btn-outline">
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
          <p className="text-center text-sm">
            New here? <Link href="/register" className="link link-primary">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}