import { LinkWithIcon } from "@/types";

import HomeIcon from "@/assets/icons/home.svg";
import AboutIcon from "@/assets/icons/about.svg";
import ExperienceIcon from "@/assets/icons/exp.svg";
import PortfolioIcon from "@/assets/icons/portfolio.svg";
import ContactIcon from "@/assets/icons/contact.svg";

export const navbarLinks: LinkWithIcon[] = [
  {
    icon: HomeIcon,
    label: "Hero",
    href: "#",
  },
  {
    icon: AboutIcon,
    label: "About",
    href: "#",
  },
  {
    icon: ExperienceIcon,
    label: "Experience",
    href: "#",
  },
  {
    icon: PortfolioIcon,
    label: "Portfolio",
    href: "#",
  },
  {
    icon: ContactIcon,
    label: "Contact",
    href: "#",
  },
];
