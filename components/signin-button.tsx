import { signIn } from "@/auth"
 
const SignIn = () => {
  return (
    <form action={async () => {
        "use server"
        await signIn("yandex");
      }}
    >
      <button type="submit">Вход через Яндекс</button>
    </form>
  )
}

export default SignIn;