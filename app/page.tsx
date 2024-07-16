import SignIn from "@/components/SignIn";
import { oswald } from "../style/fonts";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      <SignIn />
      <p className={`${oswald.className} antialiased text-2xl pb-4`}>ToDo List</p>
      <Logo />
    </>
  );
}
