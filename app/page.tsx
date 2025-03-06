import { auth } from "@/auth"
import SignIn from "@/components/signin-button";
import { useSession } from 'next-auth/react';

export default async function Home() {
  const session = await auth()
  //const { data: session } = useSession();
  
  console.log('Session: ', session);
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Session</h1>
      <p>
        User: {session?.user?.name}
      </p>
      <p>
        Email: {session?.user?.email}
      </p>
      <p>
        AccountId: {session?.user?.providerAccountId}
      </p>
      <SignIn/>
    </div>
  )
}



