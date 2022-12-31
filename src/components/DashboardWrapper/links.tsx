import * as React from "react"
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallets.svg";
import { ReactComponent as MarketIcon } from "../../assets/icons/wallets.svg";
import { ReactComponent as EventsIcon } from "../../assets/icons/events.svg";
import { ReactComponent as CalculatorIcon } from "../../assets/icons/calculator.svg";
import { ReactComponent as NewsIcon } from "../../assets/icons/news.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
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
  },
  {
    title: "Events",
    url: "/events",
    icon: <EventsIcon />,
  },
  {
    title: "Coming Soon",
    url: "/transactions",
    icon: <TransactionsIcon />,
  },
  {
    title: "News",
    url: "/news",
    icon: <NewsIcon />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <SettingsIcon />,
  },
];
export default links;