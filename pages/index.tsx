import Head from 'next/head'
import Home from "./home"
export default function Main() {
  return (
    <div>
      <Head>
        <title>
          IGAME
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-200 h-screen w-full p-4">
        <Home />
      </main>
    </div>
  )
}
