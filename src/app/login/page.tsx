"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import bg from "@/assets/logo-white.png";
import Link from "next/link";
import authService from "@/appwrite/auth";
import useAuthStore from "@/state-store/authStore";

export default function Page() {
  // const [loggedInUser, setLoggedInUser] = useState<{ name: string } | null>(
  //   null
  // );
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const {
    email,
    setEmail,
    password,
    setPassword,
    loggedInUser,
    setLoggedInUser,
  } = useAuthStore((state) => ({
    email: state.email,
    setEmail: state.setEmail,
    password: state.password,
    setPassword: state.setPassword,
    loggedInUser: state.loggedInUser,
    setLoggedInUser: state.setLoggedInUser,
  }));

  const loginHandler = async () => {
    await authService.login({ email, password });
    setLoggedInUser(await authService.getCurrentUser());
  };

  const logoutHandler = async () => {
    await authService.logout();
    setLoggedInUser({});
  };

  return (
    <main className="h-screen grid sm:grid-cols-12">
      <section className="col-span-6 flex items-center justify-center flex-col gap-y-4 relative">
        <Image className="w-1/6" src={bg} alt="Q1" />
      </section>
      <section className="px-20 flex items-center justify-center flex-col gap-y-4 col-span-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight">Login to Q1</h3>
          <p className="text-sm text-muted-foreground">
            Do not have any account?&nbsp;
            <span className="underline underline-offset-2">
              <Link href="/auth">Sign Up</Link>
            </span>
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <Input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e)}
          />
        </div>
        <Button className="w-1/2" onClick={loginHandler}>
          Login
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
