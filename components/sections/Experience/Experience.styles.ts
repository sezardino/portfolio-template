import { StyledItem, StyledList } from "@/styles";
import styled from "styled-components";

export const ExperienceList = styled(StyledList)`
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

export const ExperienceItem = styled(StyledItem)``;

export const ExperienceSubList = styled.ul`
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.sm};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.sm};
`;

export const ExperienceSubItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.xs};

  svg {
    fill: ${(props) => props.theme.colors.accent};
  }
`;
