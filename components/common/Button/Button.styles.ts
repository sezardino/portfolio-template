import styled from "styled-components";

const BaseButton = styled.a`
  display: inline-flex;
  font-size: ${(props) => props.theme.fonts.cta.sz};
  line-height: ${(props) => props.theme.fonts.cta.lh};
  transition: 0.2s all ease-in;
`;

const BaseSecondaryButton = styled(BaseButton)`
  padding: 12px 22px;
  border-radius: ${(props) => props.theme.borderRadius.xs};
  border: 2px solid ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fonts.bold};
`;

export const PrimaryButton = styled(BaseSecondaryButton)`
  background-color: ${(props) => props.theme.colors.primary};
  @media (hover: hover) {
    &:hover {
      background-color: transparent;
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const SecondaryButton = styled(BaseSecondaryButton)`
  color: ${(props) => props.theme.colors.primary};
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const LinkButton = styled(BaseButton)`
  color: ${(props) => props.theme.colors.primary};
  padding: 4px;
  @media (hover: hover) {
    &:hover {
      text-decoration: underline;
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;
