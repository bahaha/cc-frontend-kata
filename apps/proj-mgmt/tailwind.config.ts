import type { Config } from "tailwindcss";
import baseConfig from "@cc/tailwind-config/tailwind.config";

const config: Config = {
  presets: [baseConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "page-left": "var(--page-padding-left)",
        "page-right": "var(--page-padding-right)",
      },
      transitionTimingFunction: {
        "out-quad": "cubic-bezier(0.25,0.46,0.45,0.94)",
        "out-quart": "cubic-bezier(0.25,0.46,0.45,0.94)",
      },
    },
  },
};
export default config;
