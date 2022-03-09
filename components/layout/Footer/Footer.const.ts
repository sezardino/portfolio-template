import { LinkContent, LinkWithIcon } from "@/types";
import TelegramIcon from "@/assets/icons/telegram.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import EmailIcon from "@/assets/icons/email.svg";

export const footerLinks: LinkContent[] = [
  {
    label: "Hero",
    href: "#",
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Experience",
    href: "#",
  },
  {
    label: "Portfolio",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

export const footerSocial: LinkWithIcon[] = [
  { icon: TelegramIcon, label: "Telegram", href: "email@gmail.com" },
  { icon: FacebookIcon, label: "Facebook", href: "email@gmail.com" },
  { icon: EmailIcon, label: "Email", href: "email@gmail.com" },
];
