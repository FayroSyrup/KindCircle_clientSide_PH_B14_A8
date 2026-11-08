import { FaCalendarCheck, FaHandsHelping, FaMapMarkerAlt, FaUserCheck } from "react-icons/fa";

const features = [
  { icon: FaHandsHelping, title: "Start a drive", text: "Anyone can post a cleanup, food drive or blanket distribution in a few minutes." },
  { icon: FaUserCheck, title: "Join in one click", text: "Pick an event, press join and it shows up in your own list." },
  { icon: FaMapMarkerAlt, title: "Close to home", text: "Events list the exact area, like Mirpur 10 or Mohammadpur." },
  { icon: FaCalendarCheck, title: "Only what is coming", text: "Past events are hidden, so you only see drives that still need people." },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="section-title">Why KindCircle</h2>
      <p className="section-sub">Simple tools that help neighbours act together.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="card bg-base-100 shadow-md h-full">
            <div className="card-body items-center text-center">
              <f.icon className="text-4xl text-primary" />
              <h3 className="card-title">{f.title}</h3>
              <p className="opacity-80">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}