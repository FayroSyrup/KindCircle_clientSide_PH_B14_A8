"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authedApi } from "@/lib/authed";

export default function JoinButton({ eventId }) {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function join() {
    if (!session) {
      toast.error("Please login to join this event");
      return router.push(`/login?redirect=/events/${eventId}`);
    }
    setBusy(true);
    try {
      await authedApi("/joins", { method: "POST", body: { eventId } });
      toast.success("You joined this event!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button onClick={join} disabled={busy} className="btn btn-primary btn-lg">
      {busy ? <span className="loading loading-spinner" /> : "Join Event"}
    </button>
  );
}