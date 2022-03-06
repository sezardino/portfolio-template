import { WrapperProps } from "./Wrapper.props";
import { StyledWrapper } from "./Wrapper.styles";

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const { as = "section", children } = props;

  return <StyledWrapper as={as}>{children}</StyledWrapper>;
};
