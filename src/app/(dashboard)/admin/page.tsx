import UserCard from "@/components/UserCard";
import React from "react";

type Props = {};

export default function AdminPage({}: Props) {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* LEFT SIDE */}
      <div className="w-full md:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/3">Right</div>
    </div>
  );
}
