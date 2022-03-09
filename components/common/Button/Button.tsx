import { ButtonProps } from "./Button.props";
import { PrimaryButton, SecondaryButton, LinkButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = (props) => {
  const { type = "primary", children, ...rest } = props;

  const slot = children as JSX.Element | JSX.Element[];

  const Tag =
    type === "primary"
      ? PrimaryButton
      : type === "secondary"
      ? SecondaryButton
      : LinkButton;

  return <Tag {...rest}>{slot}</Tag>;
};
