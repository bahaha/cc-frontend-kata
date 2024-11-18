import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { Menu } from "./menu";

const headerVariant = cva(
  [
    "group fixed bg-background px-3",
    "inset-x-0 inset-y-[--header-top] max-w-[--header-width] mx-auto rounded-xl",
  ],
  {
    variants: {
      backdrop: {
        default: [
          "supports-[backdrop-filter]:bg-background/60",
          "supports-[backdrop-filter]:backdrop-blur-xl",
          "supports-[backdrop-filter]:backdrop-saturate-150",
        ],
      },
      border: {
        default: [
          "before:absolute before:inset-0 before:border before:rounded-xl",
          "before:pointer-events-none",
        ],
      },
      collapseState: {
        default: [
          "before:h-[--header-height] [clip-path:var(--header-collapse-clip)]",
        ],
      },
    },
    defaultVariants: {
      backdrop: "default",
      border: "default",
      collapseState: "default",
    },
  },
);

type HeaderPops = {} & VariantProps<typeof headerVariant>;

export function Header(props: HeaderPops) {
  return (
    <header className={headerVariant(props)}>
      Header works
      <Image width="24" height="24" src="/logo.svg" alt="CC's Proj Mgmt" />
      <Menu />
    </header>
  );
}
