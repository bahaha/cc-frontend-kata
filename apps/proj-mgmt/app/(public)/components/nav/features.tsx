import Link from "next/link";

import {
  NavigationMenuItem,
  NavigationMenuPrimitive,
} from "@cc/ui/components/navigation-menu";

import { NavigationMenuContent } from "../navigation-menu-content";

type FeaturesProps = {
  className?: string;
};

export function Features({ className }: FeaturesProps) {
  return (
    <NavigationMenuItem className={className}>
      <NavigationMenuPrimitive.Trigger>
        <Link href="/features">Features</Link>
      </NavigationMenuPrimitive.Trigger>
      <NavigationMenuContent>
        <div className="bg-orange-300 h-36"></div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
