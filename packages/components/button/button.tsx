import type { SizeType, ThemeType } from "../types";
import React from "react";
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
  children?: React.ReactNode;
};

const Button = ({
  loading,
  disabled,
  type = "default",
  size = "md",
  rounded,
  shadow,
  dashed,
  light,
  text,
  children,
  icon,
}: ButtonProps) => {
  const isDisabled = loading || disabled;
  const typeBtn = type !== "default" && !light;
  const typeLight = type !== "default" && light;
  const defaultLight = type === "default" && light;
  const defaultText = type === "default" && light;

  const buttonClass = [
    "o-button-base",
    isDisabled ? "o-disabled" : "o-hover-active-base",
    `o-${type}`,
    `o-button-${size}`,
    rounded && "rounded-full",
    shadow ? "shadow-context:50" : "shadow-transparent",
    dashed && "border-dashed",
    typeBtn &&
      `o-solid ${
        isDisabled
          ? ""
          : `hover-border-${type}BorderHover hover-bg-${type}LightHover hover-text-white active-text-white active-border-${type}BorderActive active-bg-${type}LightActive`
      }`,
    typeLight && `${isDisabled ? "o-button-light-disable" : "o-button-light"}`,
    defaultLight ? "o-button-defaultLight" : "",
    defaultText ? "o-button-defaultText" : "",
  ];
  return (
    <button className={cx(buttonClass)}>
      {loading && <div className="i-carbon-circle-dash animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
