import styled from "styled-components";
import { StyledWrapper } from "@/components/common/Wrapper/Wrapper.styles";

export const StyledSection = styled(StyledWrapper)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
`;

export const StyledContainer = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.xl};
  margin-top: ${(props) => props.theme.spacing.xl};

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

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;

  @media ${(props) => props.theme.media.smDesktop} {
    justify-content: flex-start;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.secondaryWhite};
  border-radius: ${(props) => props.theme.borderRadius.sm};

  svg {
    fill: ${(props) => props.theme.colors.accent};
  }
`;

export const StyledContent = styled.div`
  display: grid;
  align-items: flex-start;
  align-content: flex-start;
  gap: ${(props) => props.theme.spacing.xs};
  margin-top: ${(props) => props.theme.spacing.sm};

  @media ${(props) => props.theme.media.mobileTablet} {
    text-align: center;
  }
`;
