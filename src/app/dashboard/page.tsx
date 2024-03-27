"use client";

import Order from "@/components/Order";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  const Orders = [1];

  return (
    <main className="h-screen w-full">
      {/* <section className="h-full w-1/2 m-auto flex flex-col items-center justify-center gap-4">
        <Input className="h-1/2 flex justify-center items-center" type="file" accept=".txt"/>
        <Button type="submit">Upload File</Button>
      </section> */}
      <section className="">
        {Orders?.length ? <Order /> : "Please upload order from amazon!"}
      </section>
    </main>
  );
}
