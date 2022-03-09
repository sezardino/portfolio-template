import { HeadlineProps } from "./Headline.props";
import { StyledAccent, StyledSpan, StyledHeadline } from "./Headline.style";

export const Headline: React.FunctionComponent<HeadlineProps> = (props) => {
  const { as = 'h2', styledAs = as, before, isCentered = true, after, accent, accentColor = 'accent', ...rest } = props;

  const beforeJSX = before ? <StyledSpan>{before}</StyledSpan> : "";
  const accentJSX = accent ? <StyledAccent styledAs={styledAs} accentColor={accentColor}>{accent}</StyledAccent> :  "";
  const afterJSX = after ? <StyledSpan>{after}</StyledSpan> : "";

  return (
    <StyledHeadline as={as} isCentered={isCentered} {...rest}>
      {beforeJSX}
      {accentJSX}
      {afterJSX}
    </StyledHeadline>
  );
};
