import { cn } from "@cc/ui/lib/utils";
import { Children, cloneElement, isValidElement } from "react";

type MenuProps = {
  className?: string;
  size?: number;
  spacing?: number;
  stickThickness?: number;
  children?: React.ReactNode;
} & Omit<React.SVGAttributes<SVGElement>, "width" | "height">;
type MenuStickProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<"rect">;

export function Menu({
  className,
  size = 16,
  spacing = 0.5,
  stickThickness = 1,
  children,
}: MenuProps) {
  const width = size - spacing * 2;
  const centerY = size / 2;
  const halfThickness = stickThickness / 2;

  const sticks = Children.map(children, (child) => {
    if (!isValidElement<MenuStickProps>(child)) return child;
    if (child.type !== MenuStick) return child;
    return cloneElement(child, {
      x: spacing,
      y: centerY - halfThickness,
      width,
      height: stickThickness,
    });
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {sticks}
    </svg>
  );
}

function MenuStick({ className, ...props }: MenuStickProps) {
  return (
    <rect
      rx="0.5"
      className={cn("origin-center ease-out-quart duration-150", className)}
      {...props}
    ></rect>
  );
}

Menu.Stick = MenuStick;
