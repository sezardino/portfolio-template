import { ButtonProps } from "./Button.props";
import { PrimaryButton, SecondaryButton, LinkButton } from "./Button.styles";

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { type = "primary", children } = props;

  const Tag = type === "primary" ? PrimaryButton : type === "secondary" ? SecondaryButton : LinkButton;

  return <Tag>{children}</Tag>;
};
