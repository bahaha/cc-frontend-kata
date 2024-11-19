import { cva } from "class-variance-authority";

import { Label } from "@cc/ui/components/label";
import {
  NavigationMenuList,
  NavigationMenuPrimitive,
} from "@cc/ui/components/navigation-menu";

import { Menu } from "./menu";
import { DesktopNavbar, Home, Login, MobileSitemap } from "./nav";
import { NavigationMenuViewport } from "./navigation-menu-viewport";

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
          "before:h-[--header-collapse-height] [clip-path:var(--header-collapse-clip)]",
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
  const headerID = "Lqj8a0";
  return (
    <header id={headerID} className={headerVariant()}>
      <input type="checkbox" id="vEALn1" className="hidden" />
      <NavigationMenuPrimitive.Root className="w-full h-full flex flex-col">
        <NavigationMenuList className="flex justify-between items-center gap-4 min-h-[--header-height]">
          <Home />
          <DesktopNavbar />
          <Login />
          <li className="sm:hidden">
            <Label htmlFor="vEALn1">
              <Menu headerID={headerID} />
            </Label>
          </li>
        </NavigationMenuList>
        <MobileSitemap className="flex-grow px-2 pt-8 pb-6" />
        <NavigationMenuViewport
          headerID={headerID}
          viewportPropertyName="--nav-viewport-height"
        />
      </NavigationMenuPrimitive.Root>
    </header>
  );
}
