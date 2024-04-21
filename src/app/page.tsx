"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import bg from "@/assets/logo-white.png";

export default function Page() {
  return (
    <main className="w-full h-screen flex flex-col justify-between items-center dark">
      <section className="w-full m-4">
        <nav className="max-w-7xl mx-auto p-2 flex justify-between items-center">
          <div className="w-12">
            <Image className="w-6" src={bg} alt="Q1" />
          </div>
          <ul className="flex gap-4">
            <li>
              <Link href="/about">
                <Button variant="outline">About</Button>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <Button variant="outline">Pricing</Button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button variant="outline">Contact</Button>
              </Link>
            </li>
          </ul>
          <div className="flex justify-center items-center gap-4">
            <Link href="/authentication">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </nav>
      </section>
      <section className="m-4 text-center p-2 border rounded-md text-sm">
        &copy; Quantum One 2024 | All Rights Reserved.
      </section>
    </main>
  );
}
