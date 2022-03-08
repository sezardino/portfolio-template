import { Headline } from "@/components/common";
import { StyledSection } from "@/styles";

import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactItem,
  ContactList,
  ContactTextArea,
  ContactWrapper,
} from "./Contact.styles";

import TelegramIcon from "@/assets/icons/telegram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import EmailIcon from "@/assets/icons/email.svg";

export const Contact: React.FC = () => {
  return (
    <StyledSection>
      <Headline before="Get in Touch" accent="Contact Me" />
      <ContactWrapper>
        <ContactList>
          <ContactItem>
            <TelegramIcon width="32" height="32"/>
            <p>Email</p>
            <p>test@gmail.com</p>
          </ContactItem>
          <ContactItem>
            <FacebookIcon width="32" height="32"/>
            <p>Telegram</p>
            <p>test@gmail.com</p>
          </ContactItem>
          <ContactItem>
            <EmailIcon width="32" height="32"/>
            <p>Messenger</p>
            <p>test@gmail.com</p>
          </ContactItem>
        </ContactList>
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
