import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-24 px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-3 mb-6">We could not find that page.</p>
      <Link href="/" className="btn btn-primary">Back to home</Link>
    </div>
  );
}