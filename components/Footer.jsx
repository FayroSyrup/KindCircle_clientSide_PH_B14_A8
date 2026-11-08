import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-bold text-primary">KindCircle</h3>
          <p className="mt-3 opacity-80">
            A place where neighbours organise cleanups, clothes drives and plantation days, and where anyone can join in.
          </p>
          <p className="mt-3 text-sm opacity-70">Dhaka, Bangladesh</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 opacity-80">
            <li><Link href="/events">Upcoming Events</Link></li>
            <li><Link href="/events/create">Create Event</Link></li>
            <li><Link href="/events/manage">Manage Events</Link></li>
            <li><Link href="/events/joined">Joined Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow us</h4>
          <div className="flex gap-3 text-xl">
            <a href="https://facebook.com" aria-label="Facebook" className="btn btn-circle btn-sm"><FaFacebookF /></a>
            <a href="https://x.com" aria-label="X" className="btn btn-circle btn-sm"><FaXTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="btn btn-circle btn-sm"><FaLinkedinIn /></a>
            <a href="https://github.com/napaSyrup-r" aria-label="GitHub" className="btn btn-circle btn-sm"><FaGithub /></a>
          </div>
          <p className="mt-4 text-sm opacity-70">hello@kindcircle.org</p>
        </div>
      </div>
      <p className="text-center text-sm py-4 border-t border-white/10 opacity-70">
        © 2026 KindCircle. All rights reserved.
      </p>
    </footer>
  );
}