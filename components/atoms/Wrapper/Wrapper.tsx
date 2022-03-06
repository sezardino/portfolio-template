import { WrapperProps } from "./Wrapper.props";
import { StyledWrapper } from "./Wrapper.styles";

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children } = props;

  return <StyledWrapper>{children}</StyledWrapper>;
};
