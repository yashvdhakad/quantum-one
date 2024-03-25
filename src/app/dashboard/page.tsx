"use client";

import useCounterStore from "@/state-store/store";
import { Button } from "@/components/ui/button";
import useAuthStore from "@/state-store/authStore";

export default function Page() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const name = useCounterStore((state) => state.name);
  const nameChange = useCounterStore((state) => state.nameChange);
  const email = useAuthStore((state) => state.email);
  const userEmail = useAuthStore((state) => state.userEmail);

  return (
    <main>
      <section className="h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-4xl font-bold">{name}</div>
        <div className="text-4xl font-bold">{count}</div>
        <Button variant={"outline"} onClick={() => increment()}>
          Increment
        </Button>
        <Button variant={"outline"} onClick={() => decrement()}>
          Decrement
        </Button>{" "}
        <Button variant={"outline"} onClick={() => nameChange()}>
          Name Change
        </Button>
        <input type="email" name="email" value={email} onChange={(e) => userEmail(e)} />
        <Button variant={"outline"} onClick={() => console.log(email)}>
          Email Show
        </Button>
      </section>
    </main>
  );
}
