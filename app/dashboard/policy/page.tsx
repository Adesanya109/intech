import PolicyTable from "@/components/PolicyTable";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";

const page = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar title="Policies" />
      <div className="flex flex-grow">
        <SideBar />
        <div className="w-full space-y-7 py-7 px-14">
          <PolicyTable />
        </div>
      </div>
    </div>
  );
};

export default page;
