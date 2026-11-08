"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { avatarFor } from "@/lib/format";

export default function ProfilePage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [busy, setBusy] = useState(false);

  async function save(e) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget));
    if (f.name.trim().length < 2) return toast.error("Name is too short");
    if (!/^https?:\/\/.+/.test(f.image)) return toast.error("Enter a valid photo link");

    setBusy(true);
    const { error } = await authClient.updateUser({ name: f.name.trim(), image: f.image });
    setBusy(false);
    if (error) return toast.error(error.message || "Could not update profile");
    toast.success("Profile updated");
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="section-title mb-8">My Profile</h1>
      <form onSubmit={save} className="card bg-base-100 shadow-xl card-body gap-4 items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <img src={avatarFor(user)} alt={user?.name} />
          </div>
        </div>
        <p className="opacity-70">{user?.email}</p>
        <input name="name" defaultValue={user?.name} placeholder="Name" className="input input-bordered w-full" />
        <input name="image" defaultValue={user?.image} placeholder="Photo URL" className="input input-bordered w-full" />
        <button disabled={busy} className="btn btn-primary w-full">
          {busy ? <span className="loading loading-spinner" /> : "Update Profile"}
        </button>
      </form>
    </div>
  );
}