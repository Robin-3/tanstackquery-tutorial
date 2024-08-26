export const timeSince = (date: string | Date) => {
  const baseDate = typeof date === "string" ? new Date(date) : date;

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 }
  ];

  const seconds = Math.floor(
    (new Date().getTime() - baseDate.getTime()) / 1000
  );

  for (const { label, seconds: intervalSeconds } of intervals) {
    const interval = Math.floor(seconds / intervalSeconds);
    if (interval >= 1) {
      return `${interval} ${label}${interval > 1 ? "s" : ""}`;
    }
  }

  return `${seconds} second${seconds !== 1 ? "s" : ""}`;
};
