"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import EventCard from "@/components/EventCard";
import EventSkeleton from "@/components/EventSkeleton";
import { authedApi } from "@/lib/authed";

export default function JoinedEventsPage() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    authedApi("/joins/mine").then(setEvents).catch((e) => {
      toast.error(e.message);
      setEvents([]);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="section-title mb-10">Events You Joined</h1>
      {!events ? (
        <EventSkeleton count={3} />
      ) : events.length === 0 ? (
        <p className="text-center opacity-70">You have not joined any event yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => <EventCard key={e._id} event={e} />)}
        </div>
      )}
    </div>
  );
}