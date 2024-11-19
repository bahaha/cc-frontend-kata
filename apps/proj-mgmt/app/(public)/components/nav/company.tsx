import Link from "next/link";

import {
  NavigationMenuItem,
  NavigationMenuPrimitive,
} from "@cc/ui/components/navigation-menu";

import { NavigationMenuContent } from "../navigation-menu-content";

type CompanyProps = {
  className?: string;
};

export function Company({ className }: CompanyProps) {
  return (
    <NavigationMenuItem className={className}>
      <NavigationMenuPrimitive.Trigger>
        <Link href="/company">Company</Link>
      </NavigationMenuPrimitive.Trigger>
      <NavigationMenuContent>
        <div className="bg-emerald-300 h-44"></div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
