import type { ClassValue } from "class-variance-authority/types";
import Link from "next/link";

import { LinkProps } from "@cc/proj-mgnt/lib/types";
import { NavigationMenuItem } from "@cc/ui/components/navigation-menu";
import { cn } from "@cc/ui/lib/utils";

import { Company } from "./company";
import { Features } from "./features";

type DesktopNavbarProps = {};

export function DesktopNavbar({}: DesktopNavbarProps) {
  const navLinkStyles = (classes: ClassValue) =>
    cn(
      "hidden text-sm font-medium cursor-pointer",
      "text-foreground/80 hover:text-foreground transition-colors duration-300 ease-out-quad",
      classes,
    );

  return (
    <>
      <Features className={navLinkStyles("sm:block")} />
      <NavLink className={navLinkStyles("lg:block")} href="/method">
        Method
      </NavLink>
      <NavLink className={navLinkStyles("lg:block")} href="/customers">
        Customers
      </NavLink>
      <NavLink className={navLinkStyles("md:block")} href="/changelog">
        Changelog
      </NavLink>
      <NavLink className={navLinkStyles("sm:block")} href="/pricing">
        Pricing
      </NavLink>
      <Company className={navLinkStyles("sm:block")} />
      <NavLink className={navLinkStyles("md:block")} href="/contact">
        Contact
      </NavLink>
    </>
  );
}

type NavLinkProps = LinkProps;
export function NavLink({ className, ...props }: NavLinkProps) {
  return (
    <NavigationMenuItem className={className}>
      <Link {...props} />
    </NavigationMenuItem>
  );
}
