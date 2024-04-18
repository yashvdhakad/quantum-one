"use client";

import { Input } from "@/components/ui/input";
import useDataStore from "@/state-store/dataStore";
import { useCallback } from "react";

export default function Page() {
  const { data, setData, headers, setHeaders } = useDataStore((state) => ({
    data: state.data,
    setData: state.setData,
    headers: state.headers,
    setHeaders: state.setHeaders,
  }));

  const fileHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            const content = e.target.result.toString();
            const rows = content.split("\n");
            const headings = rows[0].split("\t");
            const orders = [];

            for (let i = 1; i < rows.length; i++) {
              const orderRow = rows[i].split("\t");
              const order: { [headings: string]: string } = {};

              for (let j = 0; j < headings.length; j++) {
                order[headings[j]] = orderRow[j];
              }

              orders.push(order);
            }

            setData(orders);
            setHeaders(headings);
          }
        };
        reader.readAsText(file);
      }
    },
    [setData]
  );

  const filteredHeaders = headers.filter((header) =>
    [
      "order-id",
      "purchase-date",
      "buyer-name",
      "buyer-phone-number",
      "sku",
      "quantity-purchased",
      "promise-date",
      "customized-url",
      "product-name",
    ].includes(header)
  );

  const filteredData = data.map((row) => {
    const filteredRow: { [key: string]: string } = {};
    Object.keys(row).forEach((key) => {
      if (filteredHeaders.includes(key)) {
        filteredRow[key] = row[key];
      }
    });
    return filteredRow;
  });

  return (
    <main className="h-screen w-full">
      <section className="h-full w-1/2 m-auto flex flex-col items-center justify-center gap-4">
        <Input type="file" accept=".txt" onChange={fileHandler} />
      </section>
      <section>
        <table>
          <thead>
            <tr>
              {filteredHeaders.map((header) => (
                <th className="p-2 border" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {filteredHeaders.map((header) => (
                  <td className="p-2 border" key={header}>
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
