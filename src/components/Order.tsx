import React, { useState, useEffect } from "react";

const Order = () => {
  const [data, setData] = useState<{ [key: string]: string }[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    fetch('/x.txt')
      .then(response => response.text())
      .then(text => {
        const rows = text.split('\n');
        const headers = rows[0].split('\t');
        const jsonData = [];

        for (let i = 1; i < rows.length; i++) {
          const row = rows[i].split('\t');
          const obj: { [key: string]: string } = {};

          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = row[j];
          }

          jsonData.push(obj);
        }

        setData(jsonData);
        setHeaders(headers);
      });
  }, []);

  return (
    <div>
      <h1>Order Data</h1>
      <table>
        <thead>
          <tr>
            {headers.map(header => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map(header => (
                <td key={header}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;