import Link from "next/link";
import { useState } from "react";

const LinkNames = [
  { name: "Home", href: "/" },
  { name: "Browse game", href: "browse-game" },
  { name: "Tournament", href: "/tornament" },
  { name: "Coaching", href: "coaching" },
];

export default function RouteLinks() {
  const [activeLink, setActiveLink] = useState("Home")

  // on click move the active class to another link
  const ActivePage = (namelink: string): void => {
    setActiveLink(namelink)
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
              onClick={() => ActivePage(namelink.name)}
            >
              {namelink.name}
            </a>
          </Link>
        );
      })}
    </nav >
  );
}

