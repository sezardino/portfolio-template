import { Headline } from "@/components/common/Headline/Headline";
import {
  ImageWrapper,
  StyledContainer,
  StyledContent,
  StyledItem,
  StyledList,
  StyledSection,
} from "./About.styles";
import ExperienceIcon from "@/assets/icons/experience.svg";
import ProjectsIcon from "@/assets/icons/projects.svg";
import Image from "next/image";

import aboutImage from "@/assets/about/image-1.png";

export const About: React.FC = (props) => {
  return (
    <StyledSection>
      <Headline as="h2" before="Get To Know" accent="About Me" />
      <StyledContainer>
        <ImageWrapper>
          <Image alt="my image" src={aboutImage} width="336" height="336" />
        </ImageWrapper>
        <div>
          <StyledList>
            <StyledItem>
              <ExperienceIcon width="24" height="24" />
              <Headline
                as="h3"
                styledAs="h4"
                after="2+ Commercial Experience"
                accent="Experience"
                accentColor="white"
              />
            </StyledItem>
            <StyledItem>
              <ProjectsIcon width="24" height="24" />
              <Headline
                as="h3"
                styledAs="h4"
                after="20+ (Pet/Commercial)"
                accent="Projects"
                accentColor="white"
              />
            </StyledItem>
          </StyledList>
          <StyledContent>
            <p>
              I am a junior front-end developer. I create websites and
              web-applications using modern technologies based on modern
              web-standards.
            </p>
            <p>
              I am always up to date with the latest trends in web-technologies
              and bestPracticed, and I carry out the tasks entrusted to me
              accurately and in time
            </p>
          </StyledContent>
        </div>
      </StyledContainer>
    </StyledSection>
  );
};
