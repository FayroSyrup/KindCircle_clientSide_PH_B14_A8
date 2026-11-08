import SafeImage from "../SafeImage";

const photos = [
  { src: "photo-1593113598332-cd288d649433", title: "Winter clothes drive, Mirpur 10" },
  { src: "photo-1469571486292-0ba58a3f068b", title: "Blanket night, Mohammadpur" },
  { src: "photo-1618477461853-cf6ed80faba5", title: "Lake cleanup, Dhanmondi" },
  { src: "photo-1542601906990-b4d3fb778b09", title: "Sapling plantation, Uttara" },
  { src: "photo-1532629345422-7515f3d16bb7", title: "Meal sharing, Old Dhaka" },
  { src: "photo-1497633762267-9d1f1e4a5fb6", title: "Book and bag drive, Rayerbazar" },
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="section-title">Moments from the field</h2>
      <p className="section-sub">A few snapshots of what our volunteers have done.</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.src} className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <SafeImage
              src={`https://images.unsplash.com/${p.src}?auto=format&fit=crop&w=700&q=80`}
              alt={p.title}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-sm p-2">{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}