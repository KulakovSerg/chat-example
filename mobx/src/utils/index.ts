export function formatLeadingZero(num: number) {
  return `${num < 10 ? "0" : ""}${num}`;
}

export function formatTime(date: Date) {
  return `${formatLeadingZero(date.getHours())}:${formatLeadingZero(
    date.getMinutes()
  )}`;
}

export function makeDelayedPromise<T>(
  callback: () => T,
  delay: number
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
}
