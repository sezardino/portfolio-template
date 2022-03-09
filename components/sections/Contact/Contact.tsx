import { Headline } from "@/components/common";
import { StyledSection } from "@/styles";
import { contactItems } from "./Contact.const";

import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactItem,
  ContactList,
  ContactTextArea,
  ContactWrapper,
} from "./Contact.styles";

export const Contact: React.FC = () => {
  const items = contactItems.map(({ icon: Icon, ...content }, index) => (
    <ContactItem key={`${content.href}-${index}`}>
      <Icon width="32" height="32" />
      <p>{content.label}</p>
      <p>{content.href}</p>
    </ContactItem>
  ));

  return (
    <StyledSection>
      <Headline before="Get in Touch" accent="Contact Me" />
      <ContactWrapper>
        <ContactList>{items}</ContactList>
        <ContactForm>
          <ContactInput placeholder="Name" type="text" />
          <ContactInput placeholder="Email" type="email" />
          <ContactTextArea as="textarea" placeholder="Message" />
          <ContactButton as="button">Send</ContactButton>
        </ContactForm>
      </ContactWrapper>
    </StyledSection>
  );
};
