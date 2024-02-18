import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

const page = () => {
  return (
    <main className="h-screen grid grid-cols-12">
      <section className="col-span-7"></section>
      <section className="px-20 flex items-center justify-center flex-col gap-y-4 border col-span-5">
        <div className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h3>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account.
          </p>
        </div>
        <Input type="email" placeholder="name@example.com" />
        <Input type="password" placeholder="password" />
        <Button className="w-full">Sign In with Email</Button>
        <p className="text-sm text-muted-foreground">Or Continue With</p>
        <Button variant="outline" className="w-full"><FaGoogle /> &nbsp; Google</Button>
        <Button variant="outline" className="w-full"><FaGithub /> &nbsp; Github</Button>
      </section>
    </main>
  );
};

export default page;
