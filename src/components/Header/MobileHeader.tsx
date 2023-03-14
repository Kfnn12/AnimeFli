import { faBars, faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "twin.macro";

export default function MobileHeader() {
  return (
    <header tw="flex relative  w-full  bg-transparent  z-[1000] px-[25px] sm:px-[64px] py-[24px] items-center justify-between">
      <div tw="flex items-center gap-4">
        <div tw="">
          <FontAwesomeIcon size="xl" icon={faBars} />
        </div>
        <Link to="/" tw="text-orange2 sm:text-2xl">
          Logo
        </Link>
      </div>
      <div>
        <a href="search">
          <FontAwesomeIcon icon={faSearch} />
        </a>
      </div>
    </header>
  );
}
