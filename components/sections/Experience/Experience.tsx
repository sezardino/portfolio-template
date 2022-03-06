import { Headline } from "@/components/common/Headline/Headline";
import { StyledSection } from "@/styles";
import {
  ExperienceList,
  ExperienceItem,
  ExperienceSubList,
  ExperienceSubItem,
} from "./Experience.styles";
import AchievementIcon from "@/assets/icons/achievement.svg";

enum SkillLevel {
  JUNIOR = "Junior",
  REGULAR = "Regular",
  ADVANCED = "Advanced",
  MASTER = "Master",
}

interface Skill {
  name: string;
  level: SkillLevel;
}

const frontendSkills: Skill[] = [
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "JavaScript", level: SkillLevel.MASTER },
  { name: "TypeScript", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "JavaScript", level: SkillLevel.MASTER },
  { name: "TypeScript", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
];

const backendSkills: Skill[] = [
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
  { name: "HTML", level: SkillLevel.MASTER },
];

export const Experience: React.FC = () => {
  const getSkillsItems = (items: Skill[]) => {
    return items.map((item) => (
      <ExperienceSubItem key={item.name}>
        <AchievementIcon width="16" height="16" />
        <Headline isCentered={false} as="h4" styledAs="h5" accent={item.name} after={item.level} />
      </ExperienceSubItem>
    ));
  };

  return (
    <StyledSection>
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
