"use client";
import { useState } from "react";

const FALLBACK =
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80";

// shows a backup photo when the link is broken
export default function SafeImage({ src, alt, className }) {
  const [url, setUrl] = useState(src || FALLBACK);
  return <img src={url} alt={alt} className={className} onError={() => setUrl(FALLBACK)} />;
}