import type { Config } from "tailwindcss";
import baseConfig from "@cc/tailwind-config/tailwind.config";

const config: Config = {
  ...baseConfig,
  presets: [baseConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
