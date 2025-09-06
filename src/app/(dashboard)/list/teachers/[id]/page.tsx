import Image from "next/image";
import React from "react";

function SingleTeacher() {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full md:w-2/3">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* User Info Card */}
          <div className="flex-1 bg-lamaSky py-6 px-4 rounded-md flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Teacher Photo"
                width={144}
                height={144}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <div className="w-2/3">
              <h1 className="font-semibold text-xl">Teacher Name</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap mt-4 text-xs font-medium">
                <div className="w-full md:w-1/2 flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="Blood Group"
                    width={14}
                    height={14}
                  />
                  <span className="ml-1">B+</span>
                </div>
                <div className="w-full md:w-1/2 flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="Date of Birth"
                    width={14}
                    height={14}
                  />
                  <span className="ml-1">01/01/1990</span>
                </div>
                <div className="w-full md:w-1/2 flex items-center gap-2">
                  <Image src="/mail.png" alt="Email" width={14} height={14} />
                  <span className="ml-1">teacher@gmail.com</span>
                </div>
                <div className="w-full md:w-1/2 flex items-center gap-2">
                  <Image src="/phone.png" alt="Phone" width={14} height={14} />
                  <span className="ml-1">123-456-7890</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1"></div>
        </div>
        {/* Bottom section */}
        <div>Schedule</div>
      </div>
      {/* Right */}
      <div className="w-full md:w-1/3">R</div>
    </div>
  );
}

export default SingleTeacher;
