import type { Theme } from "@unocss/preset-uno";
import type { UserShortcuts } from "unocss";
import { baseShortcuts } from "./base";
import { commonShortcuts } from "./common";
import { buttonShortcuts } from "./button";
import { iconShortcuts } from "./icon";
import { emptyShortcuts } from "./empty";

export default [
  baseShortcuts,
  commonShortcuts,

  // button
  buttonShortcuts,
  // icon
  iconShortcuts,
  // empty
  emptyShortcuts,

] as UserShortcuts<Theme>;
