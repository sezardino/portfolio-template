import { PrimaryButton } from "@/components/common/Button/Button.styles";
import { StyledItem, StyledList } from "@/styles";
import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.md};

  @media ${(props) => props.theme.media.tabledDesktop} {
    grid-template-columns: auto 1fr;
  } ;
`;

export const ContactList = styled.ul`
  display: grid;
  gap: ${(props) => props.theme.spacing.md};
`;

export const ContactItem = styled(StyledItem)`
  padding: ${(props) => props.theme.spacing.xxl};
  display: grid;
  gap: ${(props) => props.theme.spacing.xs};
  text-align: center;
  justify-items: center;

  svg {
    fill: ${(props) => props.theme.colors.accent};
  }

  @media ${(props) => props.theme.media.mobileOnly} {
    padding: ${(props) => props.theme.spacing.md};
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.xs};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ContactTextArea = styled(ContactInput)`
  resize: none;
  height: 200px;
`;

export const ContactButton = styled(PrimaryButton)`
  justify-self: flex-start;
`;
