import NavBar from "../components/nav/NavBar"
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200 h-screen w-full p-4">
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
