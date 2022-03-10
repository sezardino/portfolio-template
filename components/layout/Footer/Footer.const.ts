import { LinkContent, LinkWithIcon, SectionsIds } from "@/types";
import TelegramIcon from "@/assets/icons/telegram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import EmailIcon from "@/assets/icons/email.svg";

export const footerLinks: LinkContent[] = [
  {
    label: "Home",
    href: `#${SectionsIds.HOME}`,
  },
  {
    label: "About",
    href: `#${SectionsIds.ABOUT}`,
  },
  {
    label: "Experience",
    href: `#${SectionsIds.EXPERIENCE}`,
  },
  {
    label: "Portfolio",
    href: `#${SectionsIds.PORTFOLIO}`,
  },
  {
    label: "Contact",
    href: `#${SectionsIds.CONTACT}`,
  },
];

export const footerSocial: LinkWithIcon[] = [
  { icon: TelegramIcon, label: "Telegram", href: "email@gmail.com" },
  { icon: FacebookIcon, label: "Facebook", href: "email@gmail.com" },
  { icon: EmailIcon, label: "Email", href: "email@gmail.com" },
];
