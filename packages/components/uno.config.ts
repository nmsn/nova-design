// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerAttributifyJsx,
} from "unocss";

import shortcuts from "./preset/shortcuts";
import { darkTheme, getCSSPreflights, lightTheme, presetOnu } from "./preset";
import theme from "./preset/theme";
import { commonTheme } from "./types";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: "inline-block", "vertical-align": "middle" },
    }),
    presetTypography(),
    presetOnu(),
  ],
  safelist: [
    ...([
      ["xs", "sm", "md", "lg"].map((s) => [
        `o-button-${s}`,
        `o-avatar-${s}`,
        `o-avatar-group-${s}`,
        `o-card-${s}`,
        `o-checkbox-${s}`,
        `o-tag-${s}`,
        `o-switch-${s}`,
        `o-radio-${s}`,
        `o-radio-inner-${s}`,
        `o-radio-label-${s}`,
        `text-${s}`,
      ]),
    ].flat(2) as string[]),
    ...commonTheme.map((item) => {
      return `o-${item}`;
    }),
    ...commonTheme.map((item) => {
      return `text-${item}Base`;
    }),
    ...commonTheme.map((item) => {
      return `border-${item}Base`;
    }),
    ...commonTheme.map((item) => {
      return `bg-${item}Base`;
    }),
    ...commonTheme.map((item) => {
      return `bg-${item}Light`;
    }),
    ...commonTheme.map((item) => {
      return `hover-bg-${item}LightHover`;
    }),
    ...commonTheme.map((item) => {
      return `active-border-${item}BorderActive`;
    }),
    ...commonTheme.map((item) => {
      return `hover-border-${item}BorderHover`;
    }),
    ...commonTheme.map((item) => {
      return `active-bg-${item}LightActive`;
    }),
    ...commonTheme.map((item) => {
      return `hover-text-${item}LightHover`;
    }),
    ...commonTheme.map((item) => {
      return `active-text-${item}LightActive`;
    }),
    ...commonTheme.map((item) => {
      return `after-bg-${item}LightHover`;
    }),
  ],

  transformers: [transformerAttributifyJsx()],
  preflights: [
    {
      layer: "base",
      getCSS: () => `
    :root {
      ${getCSSPreflights(lightTheme)}
    }
    :root.dark {
      ${getCSSPreflights(darkTheme)}
    }
    button,select,input,option {
      outline: none;
      -webkit-appearance: none
    }
    `,
    },
  ],
});
