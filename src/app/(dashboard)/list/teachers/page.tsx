"use client";

import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/dist/client/link";
import { role, teachersData } from "@/lib/data";

type Teacher = {
  id: string;
  info: string;
  name: string;
  email?: string;
  teacherId: string;
  subjects: string[];
  classes: string[];
  phone: string;
  photo: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

function TeacherList() {
  const renderRow = (row: Teacher) => (
    <tr
      key={row.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-2">
        <Image
          src={row.photo}
          alt={row.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{row.name}</span>
          <span className="text-xs text-gray-500">{row?.email}</span>
        </div>
      </td>
      <td className="hidden md:table-cell">{row.teacherId}</td>
      <td className="hidden md:table-cell">{row.subjects.join(", ")}</td>
      <td className="hidden md:table-cell">{row.classes.join(", ")}</td>
      <td className="hidden md:table-cell">{row.phone}</td>
      <td className="hidden md:table-cell">{row.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/teachers/${row.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" height={16} width={16} alt="View" />
            </button>
          </Link>
          {role == "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" height={16} width={16} alt="View" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4 bg-white rounded-md flex-1 m-4">
      {/* top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-3 self-end">
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" height={14} width={14} alt="Filter" />
            </button>
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" height={14} width={14} alt="Sort" />
            </button>
            <button className="w-8 h-8 flex justify-center items-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" height={14} width={14} alt="Add" />
            </button>
          </div>
        </div>
      </div>
      {/* top */}
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      {/* bottom */}
      <Pagination />
    </div>
  );
}

export default TeacherList;
