import SeeMoreButton from "../availableGames/SeeAllBtn"

export default function AvailableTournament() {
  return (
    <section>
      <div className="mt-6 mb-6">
        <h2 className="text-xl text-white">Available tournaments</h2>
        <SeeMoreButton />
      </div>
      <a className="cursor-pointer">
        <figure className="w-56">
          <img src="/availabletournament.jpg" alt="Game Logo" className="rounded-lg" />
          <figcaption className="text-base text-white">
            <div className="flex justify-between items-center pt-4">
              <span role="img">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="17" fill="url(#paint0_radial)" />
                  <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17 17) rotate(90) scale(17)">
                      <stop stop-color="#37B0FD" />
                      <stop offset="1" stop-color="#2A74E7" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-xs text-white bg-black-200 py-1 px-4 rounded-md">
                Feb 21th, 2021 08:30
              </span>
            </div>
            <p className="text-base text-white pt-2">Tournament name lorem ip…</p>
            <span className="text-xs tex-white opacity-60 font-thin">EUW • 1 vs 1 • $3.20 • 24 slots</span>
          </figcaption>
        </figure>
      </a>
    </section>
  )
}

