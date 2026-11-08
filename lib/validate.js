import { todayDhaka } from "./format";
export function passwordError(p) {
  if (p.length < 6) return "Password must be at least 6 characters";
  if (!/[A-Z]/.test(p)) return "Password needs an uppercase letter";
  if (!/[a-z]/.test(p)) return "Password needs a lowercase letter";
  return "";
}

export function validateEvent(f) {
  const e = {};
  if (!f.title?.trim() || f.title.trim().length < 5) e.title = "Title must be at least 5 characters";
  if (!f.description?.trim() || f.description.trim().length < 20) e.description = "Description must be at least 20 characters";
  if (!f.eventType) e.eventType = "Pick an event type";
  if (!/^https?:\/\/.+/.test(f.thumbnail || "")) e.thumbnail = "Enter a valid image link starting with http";
  if (!f.location?.trim()) e.location = "Location is required";
  if (!f.eventDate) e.eventDate = "Pick a date";
  else if (f.eventDate < todayDhaka()) e.eventDate = "Date cannot be in the past";
  return e;
}