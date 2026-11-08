import EventSkeleton from "@/components/EventSkeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="skeleton h-10 w-64 mx-auto mb-10" />
      <EventSkeleton />
    </div>
  );
}