import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* SEARCh BAR */}
      <div className="hidden md:flex items-center gap-2 rounded-full text-xs ps-2 ring-[1.5px] ring-gray-300">
        <Image src="/search.png" width={14} height={14} alt="Search" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-[200px] p-2 outline-none"
        />
      </div>

      {/* USER Icons */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" width={20} height={20} alt="Message" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative cursor-pointer">
          <Image src="/announcement.png" width={20} height={20} alt="Message" />
          <div className="absolute -top-3 -right-3 bg-purple-500 w-5 h-5 flex items-center justify-center rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium leading-3">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Teacher</span>
        </div>
        <Image
          src="/avatar.png"
          width={36}
          height={36}
          className="rounded-full"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
