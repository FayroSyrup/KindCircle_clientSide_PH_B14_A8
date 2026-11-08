import Link from "next/link";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import SafeImage from "./SafeImage";
import { formatDate } from "@/lib/format";

// "actions" lets manage page show edit and delete instead of view
export default function EventCard({ event, actions }) {
  return (
    <div className="card bg-base-100 shadow-md h-full overflow-hidden">
      <figure className="h-48">
        <SafeImage src={event.thumbnail} alt={event.title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <span className="badge badge-primary badge-outline">{event.eventType}</span>
        <h3 className="card-title line-clamp-1">{event.title}</h3>
        <p className="flex items-center gap-2 text-sm opacity-80">
          <FaMapMarkerAlt className="text-primary shrink-0" /> <span className="line-clamp-1">{event.location}</span>
        </p>
        <p className="flex items-center gap-2 text-sm opacity-80">
          <FaRegCalendarAlt className="text-primary shrink-0" /> {formatDate(event.eventDate)}
        </p>
        <div className="card-actions mt-auto pt-3">
          {actions || (
            <Link href={`/events/${event._id}`} className="btn btn-primary btn-sm w-full">View Event</Link>
          )}
        </div>
      </div>
    </div>
  );
}