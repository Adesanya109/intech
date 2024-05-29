import Calculator from "@/components/Calculator"
import Profile from "@/components/Profile"
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import { UserProfile } from "@clerk/nextjs"


const page = () => {
    return (
        <div className="h-screen flex flex-col">
            <TopBar title='Profile' />
            <div className="flex flex-grow">
            <SideBar />
            <div className="mx-auto flex items-center">
            <UserProfile path="/dashboard/profile" />
            </div>
            </div>
        </div>
      )
}

export default page