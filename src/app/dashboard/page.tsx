"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const Orders = [1];
  const [data, setData] = useState<{ [key: string]: string }[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  const fileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          const content = e.target.result.toString();
          const rows = content.split("\n");
          const headers = rows[0].split("\t");
          const jsonData = [];

          for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split("\t");
            const obj: { [key: string]: string } = {};

            for (let j = 0; j < headers.length; j++) {
              obj[headers[j]] = row[j];
            }

            jsonData.push(obj);
          }

          setData(jsonData);
          setHeaders(headers);

          // console.log(headers);
          // console.log(jsonData);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <main className="h-screen w-full">
      <section className="h-full w-1/2 m-auto flex flex-col items-center justify-center gap-4">
        <Input type="file" accept=".txt" onChange={fileHandler} />
      </section>
      <section>
        <table>
          <thead>
            <tr>
              {headers.map((header) => {
                if (
                  header === "order-id" ||
                  header === "purchase-date" ||
                  header === "buyer-name" ||
                  header === "buyer-phone-number" ||
                  header === "sku" ||
                  header === "quantity-purchased"
                ) {
                  return (
                    <th className="p-2 border" key={header}>
                      {header}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => {
                  if (
                    header === "order-id" ||
                    header === "purchase-date" ||
                    header === "buyer-name" ||
                    header === "buyer-phone-number" ||
                    header === "sku" ||
                    header === "quantity-purchased"
                  ) {
                    return (
                      <td className="p-2 border" key={header}>
                        {row[header]}
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
