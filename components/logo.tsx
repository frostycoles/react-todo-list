import Image from "next/image"

export default function Logo () {
  return (
    <Image src="/notebook.jpg" alt="Notbook with pencil" width={200} height={133} priority={true} />
  )
}