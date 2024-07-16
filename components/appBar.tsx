import Image from "next/image"
import { auth } from "@/auth"

export default async function AppBar() {
  const session = await auth()
  return (
    <div className={`w-full h-12 bg-white shadow-md flex justify-end p-2`}>
      <div className="h-8 w-8 mr-1 relative">
        <Image src={session?.user?.image || '/profile.png'} fill alt="profile" className="rounded-full" />
      </div>
    </div>
  )
}