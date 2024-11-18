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
    },
  },
};
export default config;
