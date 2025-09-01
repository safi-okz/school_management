"use client";
import React from "react";

export default function Table({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (row: any) => React.ReactNode;
  data: any[];
}) {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className={column.className}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((row) => renderRow(row))}</tbody>
    </table>
  );
}
