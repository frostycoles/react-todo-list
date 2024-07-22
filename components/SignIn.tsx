import { auth, signIn, signOut } from "@/auth"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/16/solid"; 
import TButton from "./TButton";
export default async function SignIn() {
  const session = await auth()
  return (
    <>
      { session?.user ? <p>You are signed in as {session.user.name || session.user.name}</p> : null }
      <form
        action={async () => {
          "use server"
          session?.user
            ? await signOut()
            : await signIn("github")
        }}
      >
        <TButton>
          <div className="flex items-center">
            <ArrowRightStartOnRectangleIcon className="w-5 h-5 mr-2" />
            {!session?.user ? 'Sign In with GitHub' : 'Sign Out'}
          </div>
        </TButton>
      </form>
    </>
  )
} 