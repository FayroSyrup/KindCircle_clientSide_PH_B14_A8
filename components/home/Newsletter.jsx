"use client";
import toast from "react-hot-toast";

export default function Newsletter() {
  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Thanks for subscribing!");
    e.currentTarget.reset();
  }

  return (
    <section className="bg-primary text-primary-content py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Get alerts for new drives</h2>
        <p className="mt-2 mb-6 opacity-90">One short email when a new event opens near you.</p>
        <form onSubmit={handleSubmit} className="join w-full">
          <input type="email" required placeholder="Your email" className="input join-item w-full text-base-content" />
          <button className="btn join-item btn-secondary">Subscribe</button>
        </form>
      </div>
    </section>
  );
}