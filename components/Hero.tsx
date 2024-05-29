import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" bg-mclaren-gradient py-10">
      <div className="flex flex-col items-center space-y-7 ">
        {/* <p className="font-bold text-3xl my-5 font-mono self-start ">
          insuretech ...
        </p> */}
        <p className="text-center text-5xl font-bold font-mono">
          Drive Safe, Insure Smart
        </p>
        <p className="text-3xl">
          Get the best car insurance coverage that fits your needs and budget.
        </p>

        <Link
          className="px-4 py-2 text-center text-xl rounded-lg border-2  font-bold hover:bg-orange-500"
          href={"/dashboard"}
        >
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
