import { HTMLProps } from "react";
import { SkillLevel } from "./enums";

export interface LinkContent {
  label: string;
  href: string;
}

export interface LinkWithIcon extends LinkContent {
  icon: any;
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface PortfolioWork {
  image: StaticImageData;
  name: string;
  github: string;
  demo: string;
}

export interface DefaultSectionProps {
  id: string;
}
