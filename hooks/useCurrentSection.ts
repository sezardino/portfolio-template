import { SectionsIds } from "@/types";
import { useEffect, useState } from "react";
import { useBreakpoints } from "./useBreakpoints";
import { useIntersection } from "./useIntersection";

const createHook = () => {
  return () => {
    const [currentSection, setCurrentSection] = useState<string>();
    const { isMobile } = useBreakpoints();
    const { observer, entry } = useIntersection({ args: { threshold: isMobile ?  [0.15]: [0.5] }});

    useEffect(() => {
      if (!observer) {
        return;
      }

      const sections = document.querySelectorAll("section[id");

      sections.forEach((section) => observer.observe(section));
    }, [observer]);

    useEffect(() => {
      if (!entry || !entry.isIntersecting) {
        return;
      }

      setCurrentSection(entry.target.id);
    }, [entry]);

    return { currentSection };
  };
};

export const useCurrentSection = createHook();
