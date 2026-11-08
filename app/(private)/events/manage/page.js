"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import EventCard from "@/components/EventCard";
import EventSkeleton from "@/components/EventSkeleton";
import { authedApi } from "@/lib/authed";

export default function ManageEventsPage() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    authedApi("/events/mine").then(setEvents).catch((e) => {
      toast.error(e.message);
      setEvents([]);
    });
  }, []);

  async function remove(id) {
    const r = await Swal.fire({
      title: "Delete this event?",
      text: "This cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Yes, delete",
    });
    if (!r.isConfirmed) return;
    try {
      await authedApi(`/events/${id}`, { method: "DELETE" });
      setEvents((list) => list.filter((e) => e._id !== id));
      toast.success("Event deleted");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="section-title mb-10">Manage Your Events</h1>
      {!events ? (
        <EventSkeleton count={3} />
      ) : events.length === 0 ? (
        <p className="text-center opacity-70">You have not created any events yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard
              key={e._id}
              event={e}
              actions={
                <div className="flex gap-2 w-full">
                  <Link href={`/events/edit/${e._id}`} className="btn btn-primary btn-sm flex-1">Update</Link>
                  <button onClick={() => remove(e._id)} className="btn btn-error btn-sm flex-1">Delete</button>
                </div>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}