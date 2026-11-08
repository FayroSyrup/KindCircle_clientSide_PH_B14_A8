"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { passwordError } from "@/lib/validate";

export default function RegisterPage() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [pwError, setPwError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));

    const msg = passwordError(f.password);
    setPwError(msg);
    if (msg) return toast.error(msg);

    setBusy(true);
    const { error } = await authClient.signUp.email({
      name: f.name.trim(),
      email: f.email,
      password: f.password,
      image: f.photoURL,
    });
    setBusy(false);

    if (error) return toast.error(error.message || "Could not create account");
    toast.success("Account created, welcome to KindCircle!");
    router.push("/");
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="card bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit} className="card-body gap-3">
          <h1 className="section-title">Create account</h1>
          <input name="name" required placeholder="Full name" className="input input-bordered w-full" />
          <input name="email" type="email" required placeholder="Email" className="input input-bordered w-full" />
          <input name="photoURL" type="url" required placeholder="Photo URL" className="input input-bordered w-full" />
          <input name="password" type="password" required placeholder="Password" className="input input-bordered w-full" />
          {pwError && <p className="text-error text-sm">{pwError}</p>}
          <button disabled={busy} className="btn btn-primary">
            {busy ? <span className="loading loading-spinner" /> : "Register"}
          </button>
          <p className="text-center text-sm">
            Already have an account? <Link href="/login" className="link link-primary">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}