import { notFound } from "next/navigation";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaUser } from "react-icons/fa";
import { api } from "@/lib/api";
import { formatDate } from "@/lib/format";
import SafeImage from "@/components/SafeImage";
import JoinButton from "@/components/JoinButton";

export default async function EventDetails({ params }) {
  const { id } = await params;
  let event;
  try {
    event = await api(`/events/${id}`);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SafeImage src={event.thumbnail} alt={event.title} className="w-full h-72 md:h-96 object-cover rounded-xl" />
      <span className="badge badge-primary mt-6">{event.eventType}</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-3">{event.title}</h1>
      <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 opacity-80">
        <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> {event.location}</p>
        <p className="flex items-center gap-2"><FaRegCalendarAlt className="text-primary" /> {formatDate(event.eventDate)}</p>
        <p className="flex items-center gap-2"><FaUser className="text-primary" /> Organised by {event.creatorName}</p>
      </div>
      <p className="mt-6 leading-relaxed whitespace-pre-line">{event.description}</p>
      <div className="mt-8"><JoinButton eventId={event._id} /></div>
    </div>
  );
}