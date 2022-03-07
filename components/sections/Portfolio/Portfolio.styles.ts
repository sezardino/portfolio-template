import { StyledItem, StyledList } from "@/styles";
import styled from "styled-components";

export const PortfolioList = styled(StyledList)`
  grid-template-columns: 1fr;

  @media ${(props) => props.theme.media.tabledDesktop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.media.mdDesktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PortfolioItem = styled(StyledItem)`
  display: grid;
  gap: ${(props) => props.theme.spacing.md};
`;

export const PortfolioImage = styled.div`
  order: -1;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;
