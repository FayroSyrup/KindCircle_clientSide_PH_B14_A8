import { api } from "@/lib/api";
import { EVENT_TYPES } from "@/lib/constants";
import EventCard from "@/components/EventCard";

export const metadata = { title: "Upcoming Events | KindCircle" };

export default async function EventsPage({ searchParams }) {
  const { q = "", type = "All" } = await searchParams;
  const query = new URLSearchParams({ q, type }).toString();

  let events = [];
  let failed = false;
  try {
    events = await api(`/events?${query}`);
  } catch {
    failed = true;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="section-title">Upcoming Events</h1>
      <p className="section-sub">Only events that have not happened yet are shown here.</p>

      {/* plain GET form, the page reloads with the new filter */}
      <form className="flex flex-col sm:flex-row gap-3 mb-8">
        <input name="q" defaultValue={q} placeholder="Search by title" className="input input-bordered flex-1" />
        <select name="type" defaultValue={type} className="select select-bordered">
          <option>All</option>
          {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        <button className="btn btn-primary">Search</button>
      </form>

      {failed ? (
        <p className="text-center text-error">Could not load events. Please try again.</p>
      ) : events.length === 0 ? (
        <p className="text-center opacity-70">No upcoming events match your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => <EventCard key={e._id} event={e} />)}
        </div>
      )}
    </div>
  );
}