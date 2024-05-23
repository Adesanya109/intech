import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"



const page = () => {
  return (
    <div className="h-screen flex flex-col">
        <TopBar title="Dashboard" />
        <div className="flex flex-grow">
        <SideBar />
        </div>
    </div>
  )
}

export default page