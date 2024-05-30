import Claim from "@/components/Claim";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar title="Claims" />
      <div className="flex flex-grow">
        <SideBar />
        <div className="w-full space-y-7 py-7 px-14">
          <Claim />
        </div>
      </div>
    </div>
  );
};

export default page;
