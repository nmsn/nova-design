export const commonSize = ["xs", "sm", "md", "lg"] as const;
export const commonPosition = ["top", "right", "bottom", "left"] as const;
export const commonTheme = [
  "primary",
  "secondary",
  "success",
  "warning",
  "error",
  "info",
] as const;
export const commonPlacement = [
  "top",
  "left",
  "right",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "left-top",
  "left-bottom",
  "right-top",
  "right-bottom",
] as const;
export const commonTrigger = [
  "hover",
  "click",
  "focus",
  "context-menu",
] as const;
export const commonShadowTrigger = ["hover", "always", "never"] as const;
export type SizeType = (typeof commonSize)[number];
export type PositionType = (typeof commonPosition)[number];
export type ThemeType = (typeof commonTheme)[number];
export type Placement = (typeof commonPlacement)[number];
export type TriggerType = (typeof commonTrigger)[number];
export type ShadowType = (typeof commonShadowTrigger)[number];
