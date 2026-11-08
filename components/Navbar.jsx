import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-10">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">KindCircle</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/events" className="btn btn-ghost">Upcoming Events</Link>
        <ThemeToggle />
        <Link href="/login" className="btn btn-primary">Login</Link>
      </div>
    </header>
  );
}