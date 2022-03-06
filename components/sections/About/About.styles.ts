import { StyledItem, StyledList } from "@/styles";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.xl};

  @media ${(props) => props.theme.media.smDesktop} {
    grid-template-columns: auto 1fr;
  }
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const AboutList = styled(StyledList)`
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
`;

export const AboutItem = styled(StyledItem)`
  gap: ${(props) => props.theme.spacing.sm};

  svg {
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export const AboutContent = styled.div`
  display: grid;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${(props) => props.theme.spacing.xs};
  margin-top: ${(props) => props.theme.spacing.sm};

  @media ${(props) => props.theme.media.mobileTablet} {
    text-align: center;
  }
`;
