import type { SizeType, ThemeType } from "../types";
import cx from "classnames";
type ButtonProps = {
  type?: ThemeType | "default";
  shadow?: boolean;
  light?: boolean;
  dashed?: boolean;
  text?: boolean;
  size?: SizeType;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
};

const Button = ({
  loading,
  disabled,
  type = "default",
  size = "md",
  rounded,
  shadow,
  dashed,
}: ButtonProps) => {
  const isDisabled = loading || disabled;
  // const _type = type || 'default';
  
  console.log(type);

  const class2 = [
    "o-button-base",
    isDisabled ? "0-disabled" : "o-hover-active-base",
    `o-${type}`,
    `o-button-${size}`,
    rounded && "rounded-full",
    shadow ? "shadow-context:50" : "shadow-transparent",  
    dashed && "border-dashed",
  ];
  return <button className={cx(class2)}>1</button>;
};

export default Button;
