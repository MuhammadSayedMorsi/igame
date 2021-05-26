// get images
const LogoGameone = "/logogame.svg";
const LogoGametwo = "/logogametwo.svg"

import GameIcon from "./components/GameIcon";
import SearchIcon from "./components/SearchIcon";

export default function LeftSideBar() {
  return (
    <div>
      <SearchIcon />
      <GameIcon LogoGame={LogoGameone} />
      <GameIcon LogoGame={LogoGametwo} />
    </div>
  )
}
