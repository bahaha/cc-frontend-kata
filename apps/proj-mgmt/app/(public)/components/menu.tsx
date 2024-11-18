"use client";

import { cn } from "@cc/ui/lib/utils";
import { useToggle } from "react-use";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

type MenuProps = {
  headerID: string;
  className?: string;
  size?: number;
  spacing?: number;
  stickThickness?: number;
} & Omit<React.SVGAttributes<SVGElement>, "width" | "height">;

export function Menu({
  headerID,
  className,
  size = 16,
  spacing = 0.5,
  stickThickness = 1,
}: MenuProps) {
  const [expand, toggle] = useToggle(false);
  const width = size - spacing * 2;
  const centerY = size / 2;
  const halfThickness = stickThickness / 2;

  function handleMenuToggle() {
    const scrollHandler = expand ? enableBodyScroll : disableBodyScroll;
    scrollHandler(document.getElementById(headerID));
    toggle();
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handleMenuToggle}
    >
      <rect
        x={spacing}
        y={centerY - halfThickness}
        width={width}
        height={stickThickness}
        className={cn(
          "origin-center ease-out-quart duration-150",
          expand ? "-rotate-45" : "-translate-y-1",
        )}
      />
      <rect
        x={spacing}
        y={centerY - halfThickness}
        width={width}
        height={stickThickness}
        className={cn(
          "origin-center ease-out-quart duration-150",
          expand ? "rotate-45" : "translate-y-1",
        )}
      />
    </svg>
  );
}
