export const formatDate = (date: Date | string) => {
  // Ensure we have a Date object
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Use Intl.DateTimeFormat for consistent formatting
  return new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }).format(dateObj);
};
