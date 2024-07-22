import Image from "next/image"
import { auth } from "@/auth"

export default async function Avatar() {
  const session = await auth()
  return (
    <div className="h-8 w-8 mr-1 relative">
      <Image src={session?.user?.image || '/profile.png'} fill alt="profile" className="rounded-full" />
    </div>
  )
}