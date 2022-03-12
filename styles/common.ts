import { StyledWrapper } from "@/components/common/Wrapper/Wrapper.styles";
import styled from "styled-components";

export const StyledSection = styled(StyledWrapper)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: grid;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  position: relative;

  @media ${(props) => props.theme.media.mdDesktop} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.md};

  @media ${(props) => props.theme.media.smDesktop} {
    justify-content: flex-start;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.secondaryWhite};
  border-radius: ${(props) => props.theme.borderRadius.sm};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.md};
`;
