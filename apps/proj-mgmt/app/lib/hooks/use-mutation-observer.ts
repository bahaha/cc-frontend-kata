import { useEffect, useState } from "react";
import { debounce } from "../debounce";

export function useMutationObserver(
  targetEl: Node,
  onMutate: MutationCallback,
  options: MutationObserverInit & { debounceTime?: number },
) {
  const [observer, setObserver] = useState<MutationObserver | null>(null);

  useEffect(() => {
    if (!onMutate || typeof onMutate !== "function") {
      console.warn(
        "Must provide a valid callback function for mutation observer",
      );
      return;
    }

    const obs = new MutationObserver(
      options.debounceTime
        ? debounce(onMutate, options.debounceTime)
        : onMutate,
    );
    setObserver(obs);
  }, [onMutate, options.debounceTime, setObserver]);

  useEffect(() => {
    if (!observer) return;
    if (!targetEl) {
      console.warn(
        "You must provide a valid DOM element to observer, instead you've provided",
        targetEl,
      );
      return;
    }

    const { debounceTime, ...opts } = options;
    try {
      observer.observe(targetEl, opts);
    } catch (e) {
      console.error(
        `Could not observer mutation changes of element ${targetEl}`,
        e,
      );
    }

    return () => {
      observer?.disconnect();
    };
  }, [observer, targetEl, options]);
}
