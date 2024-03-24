"use client";
import { useState } from "react";
import { account, ID } from "../appwrite";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const session = await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.email}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Please Login or Register to proceed further!</p>
      <forms className="flex flex-col justify-center items-center gap-4">
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

        <div className="flex gap-4 items-center">
          <Button variant={"outline"} onClick={() => login(email, password)}>
            Login
          </Button>
          <span>or</span>
          <Button variant={"outline"} onClick={register}>
            Register
          </Button>
        </div>
      </forms>
    </div>
  );
};

export default LoginPage;
