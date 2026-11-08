import { Suspense } from "react";
import Banner from "@/components/home/Banner";
import Features from "@/components/home/Features";
import RecentEvents from "@/components/home/RecentEvents";
import Gallery from "@/components/home/Gallery";
import Newsletter from "@/components/home/Newsletter";
import EventSkeleton from "@/components/EventSkeleton";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="section-title">Recent Upcoming Events</h2>
        <p className="section-sub">The next six drives coming up near you.</p>
        <Suspense fallback={<EventSkeleton />}>
          <RecentEvents />
        </Suspense>
      </section>
      <Gallery />
      <Newsletter />
    </>
  );
}