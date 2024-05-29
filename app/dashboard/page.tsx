import Dashboard from "@/components/Dashboard"
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link"



const page = async () => {

  const user = await currentUser()
  return (
    <div className="h-screen flex flex-col">
        <TopBar title="Dashboard" />
        <div className="flex flex-grow">
        <SideBar />
        <div className="w-full space-y-7 py-7 px-14">
          <Link className="font-bold text-4xl flex justify-center" href={'/dashboard/profile'}>{user?.fullName}</Link>
            <Dashboard />
            </div>
        </div>
    </div>
  )
}

export default page