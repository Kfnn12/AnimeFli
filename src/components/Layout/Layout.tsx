import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { LayoutWrapper } from "./style";

export default function (props: PropsWithChildren) {
  return (
    <LayoutWrapper>
      <DashboardHeader/>
      <div className="children">
        <Outlet />
        {props.children}
      </div>
    </LayoutWrapper>
  );
}
