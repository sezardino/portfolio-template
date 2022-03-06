import { HeadlineProps } from "./Headline.props";
import { StyledAccent, StyledSpan, StyledHeadline } from "./Headline.style";

export const Headline: React.FunctionComponent<HeadlineProps> = (props) => {
  const { as = 'h2', styledAs = as, before, after, accent, accentColor = 'accent', ...rest } = props;

  const beforeJSX = before ? <StyledSpan as={as}>{before}</StyledSpan> : "";
  const accentJSX = accent ? <StyledAccent styledAs={styledAs} accentColor={accentColor}>{accent}</StyledAccent> :  "";
  const afterJSX = after ? <StyledSpan as={as}>{after}</StyledSpan> : "";

  return (
    <StyledHeadline as={as} {...rest}>
      {beforeJSX}
      {accentJSX}
      {afterJSX}
    </StyledHeadline>
  );
};
