import DashCard from "@/components/DashCard";

function page() {
  const inventoryCardData = {
    a: "Inventory & Stock Management",
    b: "/dashboard/inventory",
    z: {
      o: 20,
      p: "7mm MDF Sheets",
    },
    y: {
      o: 14,
      p: "5mm MDF Sheets",
    },
    x: {
      o: 5,
      p: "3mm MDF Sheets",
    },
    w: {
      o: 10,
      p: "1mm Golden Acrylic Sheets",
    },
    v: {
      o: 8,
      p: "3mm Golden Acrylic Sheets",
    },
    t: {
      o: 3,
      p: "5mm Black Acrylic Sheets",
    },
  };

  const orderCardData = {
    a: "Online Orders",
    b: "/dashboard/online-orders",
    z: {
      o: 20,
      p: "Today's Orders",
    },
    y: {
      o: 54,
      p: "Yesterday's Orders",
    },
    x: {
      o: 450,
      p: "This Week's Total Orders",
    },
    w: {
      o: 2245,
      p: "April's Total Orders",
    },
    v: {
      o: 6589,
      p: "2024 Total Orders",
    },
    t: {
      o: "*",
      p: "Update New Orders",
    },
  };

  const workData = {
    a: "Work Progess & Management",
    b: "/dashboard/tasks",
    z: {
      o: 20,
      p: "7mm MDF Sheets",
    },
    y: {
      o: 14,
      p: "5mm MDF Sheets",
    },
    x: {
      o: 5,
      p: "3mm MDF Sheets",
    },
    w: {
      o: 10,
      p: "1mm Golden Acrylic Sheets",
    },
    v: {
      o: 8,
      p: "3mm Golden Acrylic Sheets",
    },
    t: {
      o: 3,
      p: "5mm Black Acrylic Sheets",
    },
  };

  const nullData = {
    a: "Empty Category",
    b: "/dashboard/null",
    z: {
      o: 20,
      p: "7mm MDF Sheets",
    },
    y: {
      o: 14,
      p: "5mm MDF Sheets",
    },
    x: {
      o: 5,
      p: "3mm MDF Sheets",
    },
    w: {
      o: 10,
      p: "1mm Golden Acrylic Sheets",
    },
    v: {
      o: 8,
      p: "3mm Golden Acrylic Sheets",
    },
    t: {
      o: 3,
      p: "5mm Black Acrylic Sheets",
    },
  };

  return (
    <main className="max-w-7xl m-auto py-6 h-full grid grid-cols-1 grid-rows-4 gap-4">
      <DashCard cardData={inventoryCardData} />
      <DashCard cardData={orderCardData} />
      <DashCard cardData={workData} />
      <DashCard cardData={nullData} />
    </main>
  );
}

export default page;
