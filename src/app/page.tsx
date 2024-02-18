import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen flex flex-col justify-between items-center">
      <section className="">
        Dark Mode <Switch />
        <Link href="/login">Login</Link>
      </section>
      <section>Hero</section>
      <section>Footer</section>
    </main>
  );
}
