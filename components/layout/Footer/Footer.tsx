import { Button, Headline } from "@/components/common";
import { footerLinks, footerSocial } from "./Footer.const";
import {
  FooterIcon,
  FooterItem,
  FooterList,
  StyledFooter,
} from "./Footer.styles";

export const Footer: React.FC = () => {
  const footerNavigation = footerLinks.map((link, index) => (
    <FooterItem key={`${index}-${link.link}`}>
      <Button type="link" href={link.link}>
        {link.label}
      </Button>
    </FooterItem>
  ));

  const footerSocialList = footerSocial.map((link, index) => (
    <FooterItem key={`${index}-${link.value}`}>
      <Button type="link" href={link.value} aria-label={link.label}>
        <FooterIcon as={link.icon} width="32" height="32" />
      </Button>
    </FooterItem>
  ));

  return (
    <StyledFooter>
      <Headline as="h2" accent="Edward Arechwa" />
      <FooterList>{footerNavigation}</FooterList>
      <FooterList>{footerSocialList}</FooterList>

      <p>All rights reserved.</p>
    </StyledFooter>
  );
};
