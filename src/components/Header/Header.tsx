import ProfileBar from "../ProfileBar/ProfileBar";
import SearchBar from "../SearchBar/SearchBar";
import {
  faHome,
  faMagnifyingGlass,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfilePic from "../../assets/images/img1.jpg";
import "twin.macro";
import { BodyText, NormalText } from "../../styles/typography";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link, NavLink, useLocation } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { link } from "fs";

interface Links {
  title: string;
  url: string;
  icon: React.ReactNode;
}

const links: Links[] = [
  {
    title: "Home",
    url: "/",
    icon: <FontAwesomeIcon icon={faHome} size="xs" />,
  },
  {
    title: "Search",
    url: "/search",
    icon: (
      <FontAwesomeIcon color="#d7d7d7" icon={faMagnifyingGlass} size="xs" />
    ), 
  },
  {
    title: "Lists",
    url: "/lists",
    icon: <FontAwesomeIcon icon={faListCheck} size="xs" />,
  },
];

export default function Header() {
  const {pathname} = useLocation()
  return (
    <div tw="flex relative  w-full  bg-transparent  z-[1000] px-[25px] sm:px-[64px] py-[24px] items-center justify-between">
      <div tw="flex gap-[20px]">
        <Link to="/" tw="text-orange2 sm:text-2xl">
          Logo
        </Link>
        {links.map((link, idx) => (
          <NavLink tw="flex" key={idx.toString()} to={link.url}>
            <NavItem active={pathname == link.url}   tw="flex gap-1.5 justify-center items-center cursor-pointer">
              {link.icon}
              <p tw="sm:block hidden">{link.title}</p>
            </NavItem>
          </NavLink>
        ))}
      </div>
      <div tw="flex gap-2 hidden sm:block">
        <div tw="flex gap-1.5 items-center">
          <FontAwesomeIcon icon={faBell} size="xs" />
          <NormalText>Profile</NormalText>
        </div>
        <div tw="w-[40px] h-[40px]">
          <img
            tw="w-full border-white border-solid border-[1px] h-full rounded-3xl"
            src={ProfilePic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  color: #9496b2;
  align-items: center;
  justify-content: center;
  gap: 1.275rem;
  cursor: pointer;
  ${(props) =>
    props.active && tw` text-white`}
  
`;
