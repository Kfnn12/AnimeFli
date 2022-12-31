import tw, { styled } from "twin.macro";
interface Props {
  semiBold?: boolean;
  medium?: boolean;
  big?: boolean;
}
const Header = styled.h1((props: Props) => {
  const { big, medium, semiBold } = props;
  return [
    tw`text-[1.5rem] font-light  leading-[28px] text-[24px] `,
    big && tw`text-[3.4rem] `,
    medium && tw`text-[3rem]`,
    semiBold && tw`font-semibold`,
  ];
});
export default Header;