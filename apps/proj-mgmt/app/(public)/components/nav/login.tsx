import { Button } from "@cc/ui/components/button";
import Link from "next/link";

export function Login() {
  return (
    <li className="ml-auto sm:ml-0">
      <Button variant="secondary" asChild>
        <Link href="/login" aria-label="Log in" rel="noopener noreferrer">
          Log in
        </Link>
      </Button>
    </li>
  );
}
