import { PropsWithChildren, useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutWrapper } from "./style";
import { useViewport } from "../../context/viewportContext";
import MobileHeader from "../Header/MobileHeader";

export default function (props: PropsWithChildren) {
  const { isMobile } = useViewport();
  return (
    <LayoutWrapper>
      {isMobile ? <MobileHeader /> : <Header />}
      <div className="children">
        <Outlet />
        {props.children}
      </div>
      <Footer />
    </LayoutWrapper>
  );
}
