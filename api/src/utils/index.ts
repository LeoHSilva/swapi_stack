export const formatTimeInMilliseconds = (time?: string): string => {
  const timeInMilliseconds = Number(time) || 0;
  const minutes = Math.floor((timeInMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((timeInMilliseconds % 60000) / 1000);
  const milliseconds = Math.floor(timeInMilliseconds % 1000);

  return `${minutes}m ${seconds}s ${milliseconds}ms`;
};
