import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


const Navbar = () => {
  return (
    <div className="flex justify-between bg-black p-7 text-white">
        <h1 className="text-3xl font-bold font-serif">INSURETECH</h1>
        <div className=""><SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn></div>
    </div>
  )
}

export default Navbar