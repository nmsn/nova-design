import type { SizeType, ThemeType } from "../types";

export type ButtonProps = {
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
  children?: React.ReactNode;
};

export type ButtonGroupProps = {
  type: ButtonProps["type"];
  size: ButtonProps["type"];
  spacer: Boolean;
};
