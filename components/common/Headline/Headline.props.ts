import { colors } from "@/styles";

export interface HeadlineProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  styledAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  before?: string;
  accent?: string;
  after?: string;
  accentColor?: keyof typeof colors;
  isCentered?: boolean;
}
