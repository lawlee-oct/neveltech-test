import { ButtonStyled } from "./Button.styled";

export interface ButtonIconProps {
  icon?: React.ReactNode;
  children?: string | React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  disabled?: boolean;
  loading?: boolean;
}

export default function ButtonComponent(
  props: ButtonIconProps
): React.ReactElement {
  const { type = "default" } = props;
  return (
    <ButtonStyled type={type} {...props} icon={props.icon && props.icon}>
      {props.children}
    </ButtonStyled>
  );
}
