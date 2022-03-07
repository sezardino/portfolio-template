import Image from "next/image";
import { Headline, Button } from "@/components/common";

import { ButtonsWrapper, StyledSection } from "@/styles";
import { ContactLinks, ImageWrapper, ScrollCta } from "./Hero.styles";

import myImage from "@/assets/hero/image-1.png";
import LiIcon from "@/assets/icons/li.svg";
import GitIcon from "@/assets/icons/git.svg";

export const Hero: React.FC = () => {
  return (
    <StyledSection>
      <Headline
        accentColor="accent"
        as="h1"
        before="Hi, my name is"
        accent="Edward Arechwa"
        after="Junior Frontend Developer"
      />
      <ImageWrapper>
        <Image alt="my photo" src={myImage} width={293.5} height={388} />
      </ImageWrapper>
      <ButtonsWrapper>
        <Button>Download CV</Button>
        <Button type="secondary">{"Let's Talk"}</Button>
      </ButtonsWrapper>
      <ScrollCta>Scroll Down</ScrollCta>
      <ContactLinks>
        <Button type="link">
          <LiIcon width="24" height="24" />
        </Button>
        <Button type="link">
          <GitIcon width="24" height="24" />
        </Button>
      </ContactLinks>
    </StyledSection>
  );
};
