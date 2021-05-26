import type { AppProps } from "next/app"
import NavBar from "../components/nav/NavBar"
import '../styles/globals.css'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="bg-gray-200 h-full w-full p-4 bg-black-100">
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
