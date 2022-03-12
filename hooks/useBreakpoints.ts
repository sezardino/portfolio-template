import { useEffect, useState } from "react";

enum Breakpoints {
  TABLET = 768,
  DESKTOP = 1280,
}

const hookFactory = () => {
  return () => {
    const [isMobile, setIsMobile] = useState<boolean>();
    const [isTablet, setIsTablet] = useState<boolean>();
    const [isDesktop, setIsDesktop] = useState<boolean>();

    const setBreakpoint = () => {
      const currentWidth = window.innerWidth;

      if (currentWidth <= Breakpoints.TABLET && !isMobile) {
        setIsMobile(true);
        return;
      }

      if (
        currentWidth >= Breakpoints.TABLET &&
        currentWidth <= Breakpoints.DESKTOP &&
        !isTablet
      ) {
        console.log("tablet");
        setIsTablet(true);
        return;
      }

      if (currentWidth >= Breakpoints.DESKTOP && !isDesktop) {
        console.log("desktop");
        setIsDesktop(true);
        return;
      }
    };

    useEffect(() => {
      setBreakpoint();
      window.addEventListener("resize", setBreakpoint);

      return () => {
        window.removeEventListener("resize", setBreakpoint);
      };
    }, []);

    useEffect(() => {
      if (isMobile) {
        setIsTablet(false);
        setIsDesktop(false);
      }
    }, [isMobile]);

    useEffect(() => {
      if (isTablet) {
        setIsMobile(false);
        setIsDesktop(false);
      }
    }, [isTablet]);

    useEffect(() => {
      if (isDesktop) {
        setIsMobile(false);
        setIsTablet(false);
      }
    }, [isDesktop]);

    return { isDesktop, isMobile, isTablet };
  };
};

export const useBreakpoints = hookFactory();
