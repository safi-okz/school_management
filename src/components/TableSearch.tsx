import React from "react";
import Image from "next/image";

function TableSearch() {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 rounded-full text-xs ps-2 ring-[1.5px] ring-gray-300">
      <Image src="/search.png" width={14} height={14} alt="Search" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent w-[200px] p-2 outline-none"
      />
    </div>
  );
}

export default TableSearch;
