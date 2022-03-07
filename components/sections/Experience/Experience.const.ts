enum SkillLevel {
  JUNIOR = "Junior",
  REGULAR = "Regular",
  ADVANCED = "Advanced",
  MASTER = "Master",
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export const frontendSkills: Skill[] = [
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

export const backendSkills: Skill[] = [
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
