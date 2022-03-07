import { Button, Headline } from "@/components/common";
import { ButtonsWrapper, StyledSection } from "@/styles";
import Image from "next/image";
import { works } from "./Portfolio.const";
import {
  PortfolioImage,
  PortfolioItem,
  PortfolioList,
} from "./Portfolio.styles";

export const Portfolio: React.FC = () => {
  return (
    <StyledSection>
      <Headline before="My recent works" accent="My Portfolio" />
      <PortfolioList>
        {works.map((project) => (
          <PortfolioItem key={project.name}>
            <Headline
              as="h3"
              styledAs="h4"
              isCentered={false}
              accentColor="primary"
              accent={project.name}
            />
            <ButtonsWrapper>
              <Button href={project.github}>Github</Button>
              <Button type="secondary" href={project.demo}>
                Live Demo
              </Button>
            </ButtonsWrapper>
            <PortfolioImage>
              <Image alt={project.name} src={project.image} />
            </PortfolioImage>
          </PortfolioItem>
        ))}
      </PortfolioList>
    </StyledSection>
  );
};
