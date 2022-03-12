import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.secondaryWhite};
  border-radius: ${(props) => props.theme.borderRadius.md};
  box-shadow: 0px 0px 35px 3px ${(props) => props.theme.colors.secondary};
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const Item = styled.li``;

export const Link = styled.a`
  display: inline-flex;
  padding: 5px;
  position: relative;
  z-index: 2;
`;

export const Icon = styled.svg`
  fill: ${(props) => props.theme.colors.primary};
  transition: 0.4s fill ease-in-out;
`;

export const ActiveIcon = styled(Icon)`
  fill: ${(props) => props.theme.colors.secondary};
`;

export const Indicator = styled.div`
  display: inline-flex;
  border-radius: 50%;
  padding: 5px;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.accent};
  position: absolute;
  left: ${(props) => props.theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  box-sizing: content-box;
  transition: 0.4s left ease-in-out;
`;
