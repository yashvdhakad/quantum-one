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
import Image from "next/image";
import bg from "@/assets/logo-white.png";
import bg2 from "@/assets/logo-black.png";

export default function Page() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="w-full h-screen flex flex-col justify-between items-center">
      <section className="w-full m-4">
        <nav className="max-w-7xl mx-auto p-2 flex justify-between items-center border rounded-md bg-slate-50/5 backdrop-blur">
          <div className="w-32">
            <Image className="w-6" src={theme === "dark" ? bg : bg2} alt="Q1" />
          </div>
          <ul className="flex gap-4">
            <li className="hover:text-slate-300">
              <Link href="/login">
                <Button variant="outline">About</Button>
              </Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/login">
                <Button variant="outline">All Products</Button>
              </Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/login">
                <Button variant="outline">Pricing</Button>
              </Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="/login">
                <Button variant="outline">Contact</Button>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-4">
            <div className="hover:text-slate-300">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
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
      <section className="w-full h-screen px-6 flex justify-center items-center">
        <Image className="animate-pulse" src={theme === "dark" ? bg : bg2} alt="Q1"/>
      </section>
      <section className="m-4 text-center p-2 border rounded-md bg-slate-50/5 backdrop-blur text-sm">
        &copy; Quantum One 2024 | All Rights Reserved.
      </section>
    </main>
  );
}
