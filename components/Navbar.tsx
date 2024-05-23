import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="flex justify-between bg-black p-7 text-white">
        <Link className="text-3xl font-bold font-serif" href={'/'}>INSURETECH</Link>
        <div className="flex gap-4 items-center">
          <Link href={'/dashboard'} className="">Dashboard</Link>
          <div className=""><SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn></div>
        </div>
    </div>
  )
}

export default Navbar