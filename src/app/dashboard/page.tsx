"use client";

import useCounterStore from "@/state-store/store";
import { Button } from "@/components/ui/button";

const page = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <div>{count}</div>
      <Button variant={"outline"} onClick={() => increment()}>Increment</Button>
      <Button variant={"outline"} onClick={() => decrement()}>Decrement</Button>
    </>
  );
};

export default page;
