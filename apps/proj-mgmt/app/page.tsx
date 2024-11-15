import { Button } from "@cc/ui/components/button";
import { cn } from "@cc/ui/lib/utils";

export default function Home() {
  return (
    <main className="">
      <Button
        variant="secondary"
        className={cn("w-full", false && "text-rose-100")}
      >
        Button from shadcn
      </Button>
    </main>
  );
}
