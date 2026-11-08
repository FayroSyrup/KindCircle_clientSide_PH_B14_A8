export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="skeleton h-96 w-full" />
      <div className="skeleton h-10 w-2/3 mt-6" />
      <div className="skeleton h-24 w-full mt-4" />
    </div>
  );
}