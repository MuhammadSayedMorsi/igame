import Link from "next/link";
import { useState } from "react";
const LinkNames = [
  { name: "Home", href: "/" },
  { name: "Browse game", href: "browse-game" },
  { name: "Tournament", href: "/tornament" },
  { name: "Coaching", href: "coaching" },
];

export default function NavLinks() {
  const [activeLink, setActiveLink] = useState("Home")

  const activeRoute = (namelink) => {
    setActiveLink(namelink)
    console.log(namelink)
  }
  return (
    <nav className="mb-9 mt-9 ">
      {LinkNames.map((namelink, index) => {
        return (
          <Link
            onClick={() => activeRoute(namelink.name)}
            href={namelink.href}
            key={index}
          >
            <a className={`transition duration-200 text-base mr-4 opacity-50 hover:text-white
            ${activeLink === namelink.name ? "relative text-red-700 font-bold active" : ""

              }`}>
              {namelink.name}
            </a>
          </Link>
        );
      })}
    </nav >
  );
}
