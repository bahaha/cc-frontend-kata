import Image from "next/image";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { Label } from "@cc/ui/components/label";
import { Button } from "@cc/ui/components/button";

import { Menu } from "./menu";

const headerVariant = cva(
  [
    "group fixed bg-background px-3 rounded-[--header-round] select-none",
    "inset-x-0 inset-y-[--header-top] max-w-[--header-width] mx-auto",
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
          "will-change-[clip-path]",
          "before:h-[--header-height] [clip-path:var(--header-collapse-clip)]",
          // expand
          "has-[#vEALn1:checked]:[clip-path:var(--header-expand-clip)]",
          "has-[#vEALn1:checked]:before:h-[--header-expand-height]",
        ],
      },
      animation: {
        default: [
          "transition-[clip-path,background] ease-out-quad duration-200",
          "before:transition-[height] before:ease-out-quad before:duration-200",
        ],
      },
    },
    defaultVariants: {
      backdrop: "default",
      border: "default",
      collapseState: "default",
      animation: "default",
    },
  },
);

type HeaderPops = {};

export function Header({}: HeaderPops) {
  return (
    <header className={headerVariant()}>
      <input type="checkbox" id="vEALn1" className="hidden" />
      <ul className="flex items-center gap-4 min-h-[--header-height]">
        <li>
          <Link
            href="/"
            aria-label="Navigate to home"
            rel="noopener noreferrer"
            className="block px-2"
          >
            <Image
              width="24"
              height="24"
              src="/logo.svg"
              alt="CC's Proj Mgmt"
            />
          </Link>
        </li>
        <li className="ml-auto">
          <Button variant="secondary" asChild>
            <Link href="/login" aria-label="Log in" rel="noopener noreferrer">
              Log in
            </Link>
          </Button>
        </li>
        <li>
          <Label htmlFor="vEALn1">
            <Menu>
              <Menu.Stick className="-translate-y-1 group-has-[#vEALn1:checked]:-rotate-45 group-has-[#vEALn1:checked]:translate-y-0" />
              <Menu.Stick className="translate-y-1 group-has-[#vEALn1:checked]:rotate-45 group-has-[#vEALn1:checked]:translate-y-0" />
            </Menu>
          </Label>
        </li>
      </ul>
    </header>
  );
}
