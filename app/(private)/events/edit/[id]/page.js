"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import EventForm from "@/components/EventForm";
import { api } from "@/lib/api";
import { authedApi } from "@/lib/authed";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    api(`/events/${id}`).then(setEvent).catch(() => router.replace("/events/manage"));
  }, [id, router]);

  async function update(data) {
    await authedApi(`/events/${id}`, { method: "PUT", body: data });
    toast.success("Event updated");
    router.push("/events/manage");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="section-title mb-8">Update Event</h1>
      {event ? <EventForm initial={event} onSubmit={update} label="Save Changes" /> : <div className="skeleton h-96 w-full" />}
    </div>
  );
}