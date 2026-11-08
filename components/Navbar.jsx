"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";
import { avatarFor } from "@/lib/format";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;

  async function logout() {
    await authClient.signOut();
    toast.success("Logged out");
    router.push("/");
  }

  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-10">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">KindCircle</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/events" className="btn btn-ghost">Upcoming Events</Link>
        <ThemeToggle />

        {isPending ? (
          <div className="skeleton w-10 h-10 rounded-full" />
        ) : user ? (
          <>
            <div className="dropdown dropdown-end">
              {/* hover shows the display name */}
              <div tabIndex={0} role="button" data-tip={user.name} className="tooltip tooltip-bottom avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img src={avatarFor(user)} alt={user.name} />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box shadow-lg w-56 p-2 mt-3 z-10">
                <li><Link href="/events/create">Create Event</Link></li>
                <li><Link href="/events/manage">Manage Events</Link></li>
                <li><Link href="/events/joined">Joined Events</Link></li>
                <li><Link href="/profile">My Profile</Link></li>
              </ul>
            </div>
            <button onClick={logout} className="btn btn-outline btn-sm">Logout</button>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary">Login</Link>
        )}
      </div>
    </header>
  );
}