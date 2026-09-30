export function formatDisplayDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
