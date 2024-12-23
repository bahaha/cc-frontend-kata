import Link from "next/link";
import type { HTMLAttributes, Key } from "react";

import { LinkProps } from "@cc/proj-mgnt/lib/types";
import { cn } from "@cc/ui/lib/utils";

const navItems: LinkProps[] = [
  { href: "/plan", children: "Plan" },
  { href: "/build", children: "Build" },
  { href: "/pricing", children: "Pricing" },
  { href: "/method", children: "Method" },
  { href: "/contact", children: "Contact" },
  { href: "/customers", children: "Customers" },
  { href: "/about", children: "About" },
  { href: "/changelog", children: "Changelog" },
  { href: "/blog", children: "Blog" },
  { href: "/security", children: "Security" },
  { href: "/integrations", children: "Integrations" },
  { href: "/careers", children: "Careers" },
  { href: "/docs", children: "Docs" },
];

type MobileSitemapProps = { className?: string };

export function MobileSitemap({ className }: MobileSitemapProps) {
  return (
    <nav className={cn("sm:hidden flex flex-col justify-between", className)}>
      <ul className="grid grid-cols-2 auto-rows-auto gap-y-4">
        {navItems.map((nav) => (
          <MobileNavItem key={nav.href as string} {...nav} />
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <SocialMediaLink href="https://github.com">
          <Github />
        </SocialMediaLink>
      </div>
    </nav>
  );
}

type MobileNavItemProps = {} & LinkProps;

function MobileNavItem({ href, children, ...props }: MobileNavItemProps) {
  return (
    <li>
      <Link
        className="hover:text-foreground/60"
        href={href}
        rel="noopener noreferrer"
        {...props}
      >
        <span className="text-lg font-semibold">{children}</span>
      </Link>
    </li>
  );
}

type SocialMediaLinkProps = Omit<
  HTMLAttributes<HTMLAnchorElement>,
  "rel" | "target"
>;

function SocialMediaLink({
  className,
  children,
  ...props
}: SocialMediaLinkProps) {
  return (
    <a
      className={cn(
        "w-12 h-12 px-4 flex justify-center items-center",
        "rounded-lg hover:bg-background/60",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

function Github() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
