import { auth } from "@/auth"
import SignIn from "@/components/signin-button";
import SignOut from "@/components/signout-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth()
  const group_names = [];
  
  if (session) {
    const data = {
          method: "GET",
          headers: {
              'Authorization': 'OAuth y0_AgAAAABzul54AAsyxAAAAAEPwe9VAAC6wi3sXodObqfH6wFPYqVoeeixug',
              'Content-Type': 'application/json',
          },

      };
    const url = "https://api360.yandex.net/directory/v1/org/8015133/users/" + session?.user?.providerAccountId
    console.log("User Info URL: ", url)
    
    const res = await fetch(url, data);
    const usr_data = await res.json();
    const groups:[] = usr_data.groups;

    console.log("Got user groups: ", groups)

    for (let i = 0; i < groups.length; i++) {
      let group_url = "https://api360.yandex.net/directory/v1/org/8015133/groups/" + groups[i]
      console.log(group_url)
      let g_resp = await fetch(group_url, data)
      let g_json = await g_resp.json()
      console.log("Group: ", groups[i], " g_json: ", g_json)
      group_names.push({id: groups[i], name: g_json.name})

    }
  }
  

  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Session Test</h1>
      <p>
        User: {session?.user?.name}
      </p>
      <p>
        Email: {session?.user?.email}
      </p>
      <p>
        AccountId: {session?.user?.providerAccountId}
      </p>
      <p>Member of Groups</p>
      <ul>
        {group_names.map(group_name => (<li key={group_name.id}>{group_name.name}</li>))}
      </ul>
      <SignIn/>
      <SignOut/>
    </div>
  )
}



