"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import databaseService from "@/appwrite/database";

function page() {
  const [input, setInput] = useState("");
  const [orders, setOrders] = useState<{ data: string }[]>([]);

  // const { stockOrders, addStockOrders } = useInventoryDataStore((state) => ({
  //   stockOrders: state.stockOrders,
  //   addStockOrders: state.addStockOrders,
  // }));

  // useEffect(() => {
  //   const orders = async () => {
  //     return await databaseService.getOrders();
  //   };
  // }, []);

  const changeHandler = (e: any) => {
    setInput(e.target.value);
  };

  const clickHandler = async () => {
    setOrders([...orders, { data: input }]);
    console.log(orders)
    
    // addStockOrders(Number(input));
    const jsonOrders = JSON.stringify(orders);
    // const jsonOrders = JSON.stringify(Number(input));
    // console.log(jsonOrders);
    await databaseService.addOrder(jsonOrders);
    setInput("");
  };

  const keyHandler = (e: any) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  return (
    <main className="max-w-7xl m-auto h-screen">
      <section className="flex gap-4 justify-center items-center py-10">
        <Input
          onChange={(e) => changeHandler(e)}
          onKeyDown={(e) => keyHandler(e)}
          className="w-fit"
          type="number"
          placeholder="Enter Order Code"
          value={input}
        ></Input>
        <Button onClick={clickHandler}>Add Order</Button>
      </section>
      <section className="">
        {orders.map((order, i) => (
          <p className="w-fit border p-4 flex flex-row gap-4" key={i}>
            {order.data}
          </p>
        ))}
      </section>
    </main>
  );
}

export default page;
