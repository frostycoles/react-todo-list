import { auth, signIn, signOut } from "@/auth"
 
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
        <button type="submit">{!session?.user ? 'Sign In with GitHub' : 'Sign Out'}</button>
      </form>
    </>
  )
} 