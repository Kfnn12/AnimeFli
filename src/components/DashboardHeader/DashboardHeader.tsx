import ProfileBar from "../ProfileBar/ProfileBar";
import SearchBar from "../SearchBar/SearchBar";
import {
  faHome,
  faMagnifyingGlass,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { DashboardHeaderWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "../../assets/images/img1.jpg"
import "twin.macro";
import { BodyText, NormalText } from "../../styles/typography";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <div tw="flex relative  w-full  bg-transparent  z-[1000] px-[64px] py-[24px] items-center justify-between">
      <div tw="flex gap-[20px]">
        <Link to="/" tw="text-orange2 text-2xl">Logo</Link>

        <div tw="flex gap-1.5 items-center">
          <FontAwesomeIcon icon={faHome} size="xs" />
          <BodyText>Home</BodyText>
        </div>
        <div tw="flex gap-1.5 items-center">
          <FontAwesomeIcon color="#d7d7d7" icon={faMagnifyingGlass} size="xs" />
          <BodyText color="#d7d7d7">Search</BodyText>
        </div>
        <div tw="flex gap-1.5 items-center">
          <FontAwesomeIcon color="#d7d7d7" icon={faListCheck} size="xs" />
          <BodyText color="#d7d7d7">Lists</BodyText>
        </div>
      </div>
      <div tw="flex gap-2">
        <div tw="flex gap-1.5 items-center">
          <FontAwesomeIcon  icon={faBell} size="xs"/>
          <NormalText >Profile</NormalText>
        </div>
        <div tw="w-[40px] h-[40px]">
          <img tw="w-full border-white border-solid border-[1px] h-full rounded-3xl" src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
}
