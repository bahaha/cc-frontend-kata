import Link from "next/link";
import Image from "next/image";

export function Home() {
  return (
    <li>
      <Link
        href="/"
        aria-label="Navigate to home"
        rel="noopener noreferrer"
        className="block px-2"
      >
        <Image width="24" height="24" src="/logo.svg" alt="CC's Proj Mgmt" />
      </Link>
    </li>
  );
}
