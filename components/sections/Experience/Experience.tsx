import { Headline } from "@/components/common";
import { StyledSection } from "@/styles";
import {
  ExperienceList,
  ExperienceItem,
  ExperienceSubList,
  ExperienceSubItem,
} from "./Experience.styles";
import { DefaultSectionProps, Skill } from "@/types";

import AchievementIcon from "@/assets/icons/achievement.svg";
import { backendSkills, frontendSkills } from "./Experience.const";

export const Experience: React.FC<DefaultSectionProps> = (props) => {
  const { id } = props;
  const getSkillsItems = (items: Skill[]) => {
    return items.map((item, index) => (
      <ExperienceSubItem key={`${item.name}-${index}`}>
        <AchievementIcon width="16" height="16" />
        <Headline
          isCentered={false}
          as="h4"
          styledAs="h5"
          accent={item.name}
          after={item.level}
        />
      </ExperienceSubItem>
    ));
  };

  return (
    <StyledSection id={id}>
      <Headline before="Known technologies" accent="My Experience" />
      <ExperienceList>
        <ExperienceItem>
          <Headline as="h3" styledAs="h5" accent="Frontend" />
          <ExperienceSubList>
            {getSkillsItems(frontendSkills)}
          </ExperienceSubList>
        </ExperienceItem>
        <ExperienceItem>
          <Headline as="h3" styledAs="h5" accent="Backend" />
          <ExperienceSubList>{getSkillsItems(backendSkills)}</ExperienceSubList>
        </ExperienceItem>
      </ExperienceList>
    </StyledSection>
  );
};
