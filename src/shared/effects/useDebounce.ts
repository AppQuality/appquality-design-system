export default function debounce(callback: () => void, wait: number) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return () => {
    if (typeof timer !== "undefined") clearTimeout(timer);
    timer = setTimeout(() => {
      timer = void 0;
      callback();
    }, wait);
  };
}
