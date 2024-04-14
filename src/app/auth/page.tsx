"use client";
import Image from "next/image";
import bg from "@/assets/logo-white.png";
import authService from "@/appwrite/auth";
import useAuthStore from "@/state-store/authStore";
import Authentication from "@/components/Authentication";

export default function Page() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    loggedInUser,
    setLoggedInUser,
  } = useAuthStore((state) => ({
    email: state.email,
    setEmail: state.setEmail,
    password: state.password,
    setPassword: state.setPassword,
    name: state.name,
    setName: state.setName,
    loggedInUser: state.loggedInUser,
    setLoggedInUser: state.setLoggedInUser,
  }));

  //   const loginHandler = async () => {
  //     await authService.login({ email, password });
  //     setLoggedInUser(await authService.getCurrentUser());
  //   };

  const login = true;

  return (
    <main className="h-screen grid sm:grid-cols-12">
      <section className="col-span-6 flex items-center justify-center flex-col gap-y-4 relative">
        <Image className="w-1/6" src={bg} alt="Q1" />
      </section>
      <section className="px-20 flex items-center justify-center flex-col gap-y-4 col-span-6">
        {login ? <Authentication /> : <Authentication />}
      </section>
    </main>
  );
}
