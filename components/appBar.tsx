import Image from "next/image"

export default function AppBar() {
  return (
    <div className={`w-full h-12 bg-white shadow-md flex justify-end p-2`}>
      <div className="h-8 w-8 mr-1 relative">
        <Image src="/profile.png" fill alt="profile" className="rounded-full" />
      </div>
    </div>
  )
}