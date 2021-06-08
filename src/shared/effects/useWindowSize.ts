import { useLayoutEffect, useState } from "react";
import debounce from "./useDebounce";

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const debounceUpdateSize = debounce(function () {
      setSize([window.innerWidth, window.innerHeight]);
    }, 300);

    window.addEventListener("resize", debounceUpdateSize);

    debounceUpdateSize();

    return () => window.removeEventListener("resize", debounceUpdateSize);
  }, []);

  return size;
}
