import Head from 'next/head'
import AvailableGames from '../components/availableGames/AvailableGames'
import AvailableTournament from "../components/availableTournament/AvailableTournament"
import LeftSideBar from "../components/leftSideBar/LeftSideBar"
import RecommendedCoaching from '../components/recommendedCoaching/RecommendedCoaching'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          IGAME
        </title>
      </Head>
      <main className="mt-10">
        <LeftSideBar />
        <AvailableGames />
        <AvailableTournament />
        <RecommendedCoaching />
      </main>
    </div>
  )
}
