import { sideBarItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className=" bg-intechOrange w-56 p-7 flex-col flex h-full justify-between">
      <div>
        <div className="flex flex-col items-center mb-28 mt-2">
          <Image alt="car logo" width={80} height={80} src="/car-b.svg" />
          <p className="text-2xl font-bold ">InsureTech</p>
        </div>

        <div className=" space-y-7 flex-grow">
          {sideBarItems.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="flex gap-4 items-center"
            >
              <img src={item.icon} alt={item.title} />
              <p className="font-semibold text-xl">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src="/logout-b.svg" alt="logout-logo" />
        <p className="font-semibold text-xl">Logout</p>
      </div>
    </div>
  );
};

export default SideBar;
