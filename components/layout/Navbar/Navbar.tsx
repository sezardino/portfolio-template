import { Button } from "@/components/common";
import { linkNavigationHandler } from "@/helpers";
import { useCurrentSection } from "@/hooks";
import { useEffect, useRef } from "react";
import { navbarLinks } from "./Navbar.conts";
import * as Styled from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const { currentSection } = useCurrentSection();
  const indicator = useRef<HTMLDivElement | null>(null);
  const linksList = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    console.log(currentSection);

    if (!linksList.current || !indicator.current) {
      return;
    }

    const links = Array.from(linksList.current.querySelectorAll("a"));

    const needed = links.find(
      (link) => link.href.split("#")[1] === currentSection
    );

    indicator.current.style.left = needed?.offsetLeft + "px";
  }, [currentSection]);

  const items = navbarLinks.map((link, index) => (
    <Styled.Item key={`${link.href}-${index}`}>
      <Styled.Link
        href={link.href}
        aria-label={link.label}
        onClick={linkNavigationHandler}
      >
        {link.href === `#${currentSection}` ? (
          <Styled.ActiveIcon as={link.icon} width="24" height="24" />
        ) : (
          <Styled.Icon as={link.icon} width="24" height="24" />
        )}
      </Styled.Link>
    </Styled.Item>
  ));

  return (
    <Styled.Wrapper>
      <Styled.Indicator ref={indicator} />
      <Styled.List ref={linksList}>{items}</Styled.List>
    </Styled.Wrapper>
  );
};
