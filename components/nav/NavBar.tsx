import Links from "./Links"
import Logo from "./Logo"
import Search from "./Search"
import Signin from "./SignIn"
import Signup from "./Signup"

export default function NavBar() {
  return (
    <>
      <Signup Text="sign in" />
      <Signin />
      <Logo />
      <Links />
      <Search />

    </>
  )
}
