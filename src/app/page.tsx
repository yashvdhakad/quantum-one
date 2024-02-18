"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Page() {
  const { setTheme } = useTheme();
  return (
    <main className="w-full h-screen flex flex-col justify-between items-center">
      <section className="w-full m-4">
        <nav className="p-2 flex justify-between items-center border rounded-md bg-slate-50/5 backdrop-blur">
          <div>Q1</div>
          <ul className="flex gap-6">
            <li><Link href="/login">Features</Link></li>
            <li><Link href="/login">Pricing</Link></li>
            <li><Link href="/login">More Products</Link></li>
            <li><Link href="/login">Contact</Link></li>
          </ul>
          <div className="flex justify-center items-center gap-6">
            <div>
              <Link href="/login">Login</Link>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <FaMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <FaSun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </section>
      <section>
        <h1>Quantum One</h1>
      </section>
      <section>&copy; Quantum One 2024</section>
    </main>
  );
}
