import tw from "twin.macro";
import styled from "@emotion/styled";
import { colors } from "../../constants/variables";

export const DashboardWrapperContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(240px, 260px) 1fr;
  .sideNav {
    min-height: 100vh;

    ${tw`bg-white`};
    /* box-shadow: 10px 0px 15px rgba(0, 0, 0, 0.03); */
  }
  .children {
    margin: 0 0px 150px 0px;
    overflow: hidden;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 32px;
`;

export const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  color: #9496b2;
  align-items: center;
  gap: 1.275rem;
  padding: 6px 14px;
  ${(props) =>
    props.active && tw` border-solid border-r-4 text-black border-[#D22F27]`}
  .icon {
    fill: #d22f27;
    color: #d22f27;
  }
`;
export const Aside = styled.aside`
  padding: 34px 0px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-right: 1px solid #9496b2;
  align-items: center;
  position: fixed;
  
  height: 100vh;
  width: 260px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  /* ${tw`max-w-[100%] `}  */
  /* display: flex;
  border-right: 1px solid #9496B2;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 2px;
  }
  ${tw`max-w-[100%] `} */
`;
