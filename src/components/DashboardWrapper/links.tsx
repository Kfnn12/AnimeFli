import * as React from "react"
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallets.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icons/transactions.svg";

interface Links {
  title: string;
  url: string;
  icon: React.ReactNode;
}

 const links: Links[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: <DashboardIcon />,
  },
  {
    title: "Community",
    url: "/wallets",
    icon: <WalletIcon />,
  },
  {
    title: "Discovery",
    url: "/markets",
    icon: <TransactionsIcon />,
  } 
];
export default links;