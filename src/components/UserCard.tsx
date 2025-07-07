import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 min-w-[130px] flex-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white rounded-full px-2 py-1 text-green-600">
          2024/2
        </span>
        <Image src="/more.png" width={20} height={20} alt="More" />
      </div>
      <h1 className="text-2xl font-semibold my-4">12,3455</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
