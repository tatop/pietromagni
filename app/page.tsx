import Headear from "@/components/header";
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-3/4 mx-auto">
      <Headear />
      <ModeToggle />
    </main>
  );
}
