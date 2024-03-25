"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { account, ID } from "../appwrite";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import bg from "@/assets/logo-white.png";
import bg2 from "@/assets/logo-black.png";
import Link from "next/link";

export default function Page() {
  const [loggedInUser, setLoggedInUser] = useState<{ email: string } | null>(
    null
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email: string, password: string) => {
    const session = await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <section>
       <h1> Sign Up Successful!</h1>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </section>
    );
  }

  const { theme } = useTheme();

  return (
    <main className="h-screen grid sm:grid-cols-12">
      <section className="col-span-6 flex items-center justify-center flex-col gap-y-4 relative">
        <Image className="w-1/6" src={theme === "dark" ? bg : bg2} alt="Q1" />
      </section>
      <section className="px-20 flex items-center justify-center flex-col gap-y-4 col-span-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h3>
          <p className="text-sm text-muted-foreground">
            Enter your details below to create your account.
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Input
            type="name"
            placeholder="your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-1/2" onClick={register}>
          Sign Up
        </Button>
        <p className="text-sm text-muted-foreground">or continue with</p>
        <div className="w-1/2 flex flex-col gap-2">
          <Button variant="outline" className="w-full">
            <FaGoogle /> &nbsp; Google
          </Button>
        </div>
        <p className="w-1/2 text-xs text-muted-foreground text-center">
          By clicking continue, you agree to our{" "}
          <span className="underline underline-offset-2">Terms of Service</span>{" "}
          and{" "}
          <span className="underline underline-offset-2">Privacy Policy</span>.
        </p>
      </section>
    </main>
  );
}