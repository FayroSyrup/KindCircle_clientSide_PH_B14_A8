"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { EVENT_TYPES } from "@/lib/constants";
import { todayDhaka } from "@/lib/format";
import { validateEvent } from "@/lib/validate";

// used by both create and edit pages
export default function EventForm({ initial = {}, onSubmit, label }) {
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const errs = validateEvent(data);
    setErrors(errs);
    if (Object.keys(errs).length) return toast.error("Please fix the errors in the form");

    setBusy(true);
    try {
      await onSubmit(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusy(false);
    }
  }

  const Err = ({ name }) => (errors[name] ? <p className="text-error text-sm mt-1">{errors[name]}</p> : null);

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl card-body gap-4">
      <div>
        <input name="title" defaultValue={initial.title} placeholder="Event title" className="input input-bordered w-full" />
        <Err name="title" />
      </div>
      <div>
        <select name="eventType" defaultValue={initial.eventType || ""} className="select select-bordered w-full">
          <option value="" disabled>Select event type</option>
          {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        <Err name="eventType" />
      </div>
      <div>
        <input name="thumbnail" defaultValue={initial.thumbnail} placeholder="Thumbnail image URL" className="input input-bordered w-full" />
        <Err name="thumbnail" />
      </div>
      <div>
        <input name="location" defaultValue={initial.location} placeholder="Location, e.g. Mirpur 10, Dhaka" className="input input-bordered w-full" />
        <Err name="location" />
      </div>
      <div>
        <input name="eventDate" type="date" min={todayDhaka()} defaultValue={initial.eventDate} className="input input-bordered w-full" />
        <Err name="eventDate" />
      </div>
      <div>
        <textarea name="description" defaultValue={initial.description} rows={5} placeholder="What will happen at this event?" className="textarea textarea-bordered w-full" />
        <Err name="description" />
      </div>
      <button disabled={busy} className="btn btn-primary">
        {busy ? <span className="loading loading-spinner" /> : label}
      </button>
    </form>
  );
}