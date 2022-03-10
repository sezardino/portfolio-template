import { Button } from "@/components/common";
import { navbarLinks } from "./Navbar.conts";
import * as Styled from "./Navbar.styles";

export const Navbar: React.FC = () => {
  const items = navbarLinks.map((link, index) => (
    <Styled.Item key={`${link.href}-${index}`}>
      <Styled.Link href={link.href} aria-label={link.label}>
        <Styled.Icon as={link.icon} width="24" height="24" />
      </Styled.Link>
    </Styled.Item>
  ));

  return (
    <Styled.Wrapper>
      <Styled.Indicator />
      <Styled.List>{items}</Styled.List>
    </Styled.Wrapper>
  );
};
