import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

import { NavigationMenuPrimitive } from "@cc/ui/components/navigation-menu";
import { cn } from "@cc/ui/lib/utils";

export const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn("w-full pt-2 pb-4", className)}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
