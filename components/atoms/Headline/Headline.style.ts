import styled from "styled-components";
import { HeadlineProps } from "./Headline.props";

export const StyledHeadline = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${(props) => props.theme.spacing.xs};
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fonts.cta.sz};
  line-height: ${(props) => props.theme.fonts.cta.lh};
`;

export const StyledAccent = styled.span<
  Pick<HeadlineProps, "accentColor" | "styledAs">
>`
  color: ${(props) =>
    props.accentColor
      ? props.theme.colors[props.accentColor]
      : props.theme.colors.primary};
  font-size: ${(props) =>
    props.styledAs === "h1"
      ? props.theme.fonts.h1.sz
      : props.styledAs === "h2"
      ? props.theme.fonts.h2.sz
      : props.styledAs === "h3"
      ? props.theme.fonts.h3.sz
      : props.styledAs === "h4"
      ? props.theme.fonts.h4.sz
      : props.theme.fonts.base.sz};
  line-height: ${(props) =>
    props.styledAs === "h1"
      ? props.theme.fonts.h1.lh
      : props.styledAs === "h2"
      ? props.theme.fonts.h2.lh
      : props.styledAs === "h3"
      ? props.theme.fonts.h3.lh
      : props.styledAs === "h4"
      ? props.theme.fonts.h4.lh
      : props.theme.fonts.base.lh};
`;
