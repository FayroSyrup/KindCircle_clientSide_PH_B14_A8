"use client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import EventForm from "@/components/EventForm";
import { authedApi } from "@/lib/authed";

export default function CreateEventPage() {
  const router = useRouter();

  async function create(data) {
    await authedApi("/events", { method: "POST", body: data });
    toast.success("Event created successfully");
    router.push("/events");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="section-title mb-8">Create a New Event</h1>
      <EventForm onSubmit={create} label="Create Event" />
    </div>
  );
}