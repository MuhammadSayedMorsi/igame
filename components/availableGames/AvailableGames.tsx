import SeeMoreButton from "./SeeAllBtn"

export default function AvailableGames() {
  return (
    <section>
      <div className="mt-4">
        <h2 className="text-xl text-white">Available games</h2>
        <SeeMoreButton />
      </div>
      <a className="cursor-pointer">
        <figure >
          <img src="/bitmap.png" alt="Game Logo" className="rounded-lg" />
          <figcaption className="text-base text-white">
            League of legeng…
          </figcaption>
        </figure>
      </a>
    </section>
  )
}
