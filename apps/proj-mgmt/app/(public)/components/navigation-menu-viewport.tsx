"use client";
import type { ComponentPropsWithoutRef } from "react";
import { useCallback, useRef } from "react";

import { useMutationObserver } from "@cc/proj-mgnt/lib/hooks/use-mutation-observer";
import {
  NavigationMenuCssVariables,
  NavigationMenuPrimitive,
  NavigationMenuState,
} from "@cc/ui/components/navigation-menu";
import { cn } from "@cc/ui/lib/utils";

type NavigationMenuViewportProps = {
  headerID: string;
  viewportPropertyName: string;
} & ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>;

export function NavigationMenuViewport({
  headerID,
  viewportPropertyName,
  className,
  ...props
}: NavigationMenuViewportProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onViewportSizeChange = useCallback<MutationCallback>((mutations) => {
    const mutation = mutations[0];
    if (!mutation) return;

    const viewport = mutation.target as HTMLDivElement;
    const state = viewport.dataset["state"] as NavigationMenuState;
    const containerEl =
      document.getElementById(headerID) ?? document.documentElement;

    if (state === "open") {
      const viewportHeight = viewport.style.getPropertyValue(
        NavigationMenuCssVariables.viewport.height,
      );
      containerEl.style.setProperty(viewportPropertyName, viewportHeight);
    } else {
      containerEl.style.removeProperty(viewportPropertyName);
    }
  }, []);
  useMutationObserver(ref.current!, onViewportSizeChange, {
    attributes: true,
    attributeFilter: ["style"],
  });

  return (
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn("", className)}
      {...props}
      forceMount
    />
  );
}
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;
