import Link from "next/link";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { FaGoogle } from "react-icons/fa";
import authService from "@/appwrite/auth";
import useAuthStore from "@/state-store/authStore";

const Authentication = () => {
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

  const singUpHandler = async () => {
    await authService.createAccount({ email, password, name });
    setLoggedInUser(await authService.getCurrentUser());
  };

  return (
    <>
      <div className="text-center">
        <h3 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h3>
        <p className="text-sm text-muted-foreground">
          Already have an account?&nbsp;
          <span className="underline underline-offset-2">
            <Link href="/login">Login</Link>
          </span>
        </p>
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <Input
          type="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e)}
        />
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
      <Button className="w-1/2" onClick={singUpHandler}>
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
        and <span className="underline underline-offset-2">Privacy Policy</span>
        .
      </p>
    </>
  );
};

export default Authentication;
