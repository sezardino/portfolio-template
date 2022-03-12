import { MouseEvent as MEvent } from "react";

export const linkNavigationHandler = (event: MEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  const hash = event.currentTarget.href.split("#")[1];
  const neededSection = document.querySelector(
    `#${hash}`
  ) as HTMLElement | null;

  if (!neededSection) {
    return;
  }

  window.scrollTo({ top: neededSection.offsetTop, behavior: "smooth" });
};
