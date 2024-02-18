import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import bg from "@/app/assets/x.gif"

const page = () => {
  return (
    <main className="h-screen grid sm:grid-cols-12">
      <section className="col-span-7 flex items-center justify-center flex-col gap-y-4 relative">
        <Image className="w-full h-full opacity-30 absolute -z-10" src={bg} alt="bg" />
        <h1 className="text-7xl font-black text-yellow-400 italic tracking-tight text-center uppercase">Quantum One</h1>
        {/* <p className="text-muted-foreground">
          Building your business Quantums, One at a time!
        </p> */}
      </section>
      <section className="px-20 flex items-center justify-center flex-col gap-y-4 col-span-5">
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h3>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account.
          </p>
        </div>
        <div className="w-full flex gap-x-2">
          <Input type="email" placeholder="name@example.com" />
          <Input type="password" placeholder="password" />
        </div>
        <Button className="w-full">Sign In with Email</Button>
        <p className="text-sm text-muted-foreground">or continue with</p>
        <div className="w-full flex gap-x-2">
          <Button variant="outline" className="w-full">
            <FaGoogle /> &nbsp; Google
          </Button>
          <Button variant="outline" className="w-full">
            <FaGithub /> &nbsp; Github
          </Button>
        </div>
      </section>
    </main>
  );
};

export default page;
