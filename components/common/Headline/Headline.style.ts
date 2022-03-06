import styled from "styled-components";
import { HeadlineProps } from "./Headline.props";

export const StyledHeadline = styled.div<Pick<HeadlineProps, "isCentered">>`
  display: flex;
  flex-direction: column;
  text-align: ${(props) => (props.isCentered ? "center" : "left")};
  gap: ${(props) => props.theme.spacing.xs};
`;

export const StyledSpan = styled.span<Pick<HeadlineProps, "as">>`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) =>
    props.as === "h1"
      ? props.theme.fonts.cta.sz
      : props.as === "h3"
      ? props.theme.fonts.caption.sz
      : props.theme.fonts.base.sz};
  line-height: ${(props) =>
    props.as === "h1"
      ? props.theme.fonts.cta.lh
      : props.as === "h3"
      ? props.theme.fonts.caption.lh
      : props.theme.fonts.base.lh};
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
