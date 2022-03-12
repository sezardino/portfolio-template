import { RefObject, useEffect, useState } from "react";

interface IntersectionArgs extends IntersectionObserverInit {
  once?: boolean;
}

interface UseIntersectionProps {
  element?: RefObject<Element> | RefObject<Element>[];
  args: IntersectionArgs;
}

export const useIntersection = (props: UseIntersectionProps) => {
  const { element, args } = props;
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const { once = false, root = null, rootMargin = "0%", threshold = 0 } = args;
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && once;

  const updEntry = (entries: IntersectionObserverEntry[]): void =>
    setEntry(entries[0]);

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (frozen || !hasIOSupport) {
      return;
    }

    const params = { root, rootMargin, threshold };
    const observerInstance = new IntersectionObserver(updEntry, params);
    setObserver(observerInstance);

    if (Array.isArray(element)) {
      element.forEach((el) => {
        if (!el.current) {
          return;
        }

        observerInstance.observe(el.current);
      });
      return;
    }

    if (!element || !element.current) {
      return;
    }

    observerInstance.observe(element.current);

    return () => {
      observerInstance.disconnect();
      setObserver(null);
    };
  }, [JSON.stringify(props)]);

  return { entry, observer };
};
