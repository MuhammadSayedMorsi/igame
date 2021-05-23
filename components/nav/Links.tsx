import Link from "next/link";
import { useState } from "react";
const LinkNames = [
  { name: "Home", href: "/" },
  { name: "Browse game", href: "browse-game" },
  { name: "Tournament", href: "/tornament" },
  { name: "Coaching", href: "coaching" },
];

const NavLinks: React.FC = () => {

  const [activeLink, setActiveLink] = useState("Home")

  const activeRoute = (namelink: string) => {
    setActiveLink(namelink)
    console.log(namelink)
  }
  return (
    <nav className="mb-9 mt-9 ">
      {LinkNames.map((namelink, index) => {
        return (
          <Link

            href={namelink.href}
            key={index}
          >
            <a className={`transition duration-200 text-base mr-4 opacity-50 hover:text-white
            ${activeLink === namelink.name ? "relative text-red-700 font-bold active" : ""

              }`}
              onClick={() => void activeRoute(namelink.name)}
            >
              {namelink.name}
            </a>
          </Link>
        );
      })}
    </nav >
  );
}
export default NavLinks;
