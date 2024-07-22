import ProfileMenu from "./profileMenu"

export default async function AppBar() {
  return (
    <div className={`w-full h-12 bg-white shadow-md flex justify-end p-2`}>
      <ProfileMenu />
    </div>
  )
}