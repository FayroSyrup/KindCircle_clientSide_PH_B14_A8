export function passwordError(p) {
  if (p.length < 6) return "Password must be at least 6 characters";
  if (!/[A-Z]/.test(p)) return "Password needs an uppercase letter";
  if (!/[a-z]/.test(p)) return "Password needs a lowercase letter";
  return "";
}