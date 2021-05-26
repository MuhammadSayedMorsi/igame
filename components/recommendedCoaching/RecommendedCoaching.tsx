import SeeMoreButton from "../availableGames/SeeAllBtn"
import Rate from "../rate"

export default function RecommendedCoaching() {
  return (
    <section>
      <div className="mt-6 mb-6">
        <h2 className="text-xl text-white">Recommended coaching</h2>
        <SeeMoreButton />
      </div>
      <a className="cursor-pointer">
        <figure className="w-56">
          <img src="/recommend.png" alt="Game Logo" className="rounded-lg" />
          <figcaption className="text-base text-white">
            <div className="flex items-start pt-2">
              <img src="/Oval.png" alt="logo" className="pt-2" />
              <div className="pl-4">
                <span className="text-xs text-white opacity-70">
                  Ekene Obasey
              </span>
                <p className="text-base text-white">Coaching title lorem i…</p>
                <span className="block">
                  <Rate />
                </span>
              </div>
            </div>

          </figcaption>
        </figure>
      </a>
    </section>
  )
}

