import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import links from "./links";
import { Aside, Nav, NavItem } from "./styles";
import "twin.macro";

export default function SideNav() {
  const { pathname } = useLocation();
  
  return (
    <Aside>
      <div >
        <Link to="/" tw="flex font-normal items-center gap-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#D22F27"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z"
              clipRule="evenodd"
            />
          </svg>
          <p>Exxmon<span tw="text-red">.</span></p>
          
        </Link>
      </div>
      <Nav>
        {links.map((link, idx) => (
          <NavLink to={link.url} key={idx.toString()}>
            <NavItem active={pathname == link.url}>
              <div className="icon">{link.icon}</div> <p tw="text-sm">{link.title}</p>
            </NavItem>
          </NavLink>
        ))}
      </Nav>
    </Aside>
  );
}
