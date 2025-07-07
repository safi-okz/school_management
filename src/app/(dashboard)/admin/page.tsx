import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

type Props = {};

export default function AdminPage({}: Props) {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* LEFT SIDE */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>
        {/* MIddle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">Attendance</div>
        </div>
        {/* Bottom Chart */}
      </div>
      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/3">Right</div>
    </div>
  );
}
