import React from "react";
import { MOBILE } from "../constants/viewports";
import { isClient } from "../lib/generic_utils";

const viewportContext = React.createContext({
  width: 0,
  height: 0,
});
export default function ViewportProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [width, setWidth] = React.useState(isClient ? window.innerWidth : 0);
  const [height, setHeight] = React.useState(isClient ? window.innerHeight : 0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
}
export const useViewport = () => {
  const { width } = React.useContext(viewportContext);
  const isMobile = width < MOBILE;
  return { isMobile };
};
