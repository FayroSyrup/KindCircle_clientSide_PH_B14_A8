import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="hero min-h-[70vh] relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/60" />
      <div className="hero-content text-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold">Small acts. Big change in your area.</h1>
          <p className="py-6 text-lg">
            Find a winter clothes drive, a cleanup or a tree plantation near you, or start one yourself.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/events" className="btn btn-primary">Explore Events</Link>
            <Link href="/events/create" className="btn btn-outline text-white">Start an Event</Link>
          </div>
        </div>
      </div>
    </section>
  );
}