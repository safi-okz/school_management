"use client";

import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/dist/client/link";
import { role, lessonsData } from "@/lib/data";

type Lesson = {
  id: string;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

function LessonsList() {
  const renderRow = (row: Lesson) => (
    <tr
      key={row.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <span className="font-semibold">{row.subject}</span>
        </div>
      </td>
      <td className="hidden md:table-cell gap-4 p-4">{row.class}</td>
      <td className="hidden md:table-cell gap-4 p-4">{row.teacher}</td>
      <td>
        <div className="flex items-center gap-4 p-4">
          <Link href={`/teachers/${row.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" height={16} width={16} alt="Edit" />
            </button>
          </Link>
          {role == "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" height={16} width={16} alt="Delete" />
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
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
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
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* bottom */}
      <Pagination />
    </div>
  );
}

export default LessonsList;
