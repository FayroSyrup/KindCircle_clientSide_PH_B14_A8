import Link from "next/link";
import { api } from "@/lib/api";
import EventCard from "../EventCard";

export default async function RecentEvents() {
  let events = [];
  try {
    events = await api("/events?limit=6");
  } catch {}

  return events.length === 0 ? (
    <p className="text-center opacity-70">No upcoming events yet. Be the first to create one!</p>
  ) : (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => <EventCard key={e._id} event={e} />)}
      </div>
      <div className="text-center mt-8">
        <Link href="/events" className="btn btn-outline btn-primary">See all events</Link>
      </div>
    </>
  );
}