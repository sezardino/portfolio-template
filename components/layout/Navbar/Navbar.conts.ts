import { LinkWithIcon, SectionsIds } from "@/types";

import HomeIcon from "@/assets/icons/home.svg";
import AboutIcon from "@/assets/icons/about.svg";
import ExperienceIcon from "@/assets/icons/exp.svg";
import PortfolioIcon from "@/assets/icons/portfolio.svg";
import ContactIcon from "@/assets/icons/contact.svg";

export const navbarLinks: LinkWithIcon[] = [
  {
    icon: HomeIcon,
    label: "Hero",
    href: `#${SectionsIds.HOME}`,
  },
  {
    icon: AboutIcon,
    label: "About",
    href: `#${SectionsIds.ABOUT}`,
  },
  {
    icon: ExperienceIcon,
    label: "Experience",
    href: `#${SectionsIds.EXPERIENCE}`,
  },
  {
    icon: PortfolioIcon,
    label: "Portfolio",
    href: `#${SectionsIds.PORTFOLIO}`,
  },
  {
    icon: ContactIcon,
    label: "Contact",
    href: `#${SectionsIds.CONTACT}`,
  },
];
