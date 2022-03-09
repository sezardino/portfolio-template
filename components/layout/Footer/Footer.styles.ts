import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${(props) => props.theme.colors.secondaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

export const FooterList = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const FooterItem = styled.li``;

export const FooterIcon = styled.div`
  fill: ${(props) => props.theme.colors.primary};

  &:hover {
    fill: ${(props) => props.theme.colors.accent};
  }
`;
