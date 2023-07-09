import FooterImg from "../../assets/images/footerimg.png";
import { ReactComponent as TwitterLogo } from "../../assets/icons/TwitterLogo.svg";
import { ReactComponent as GithubLogo } from "../../assets/icons/Gmail.svg";
import { ReactComponent as GmailLogo } from "../../assets/icons/Github.svg";
import "twin.macro";

export default function Footer() {
  return (
    <section tw="p-[20px] my-[50px] bg-primary flex flex-col justify-between text-secondary">
      <div tw="flex justify-center sm:justify-between items-center ">
        <div tw="h-[50px] w-[60px] my-[10px] ml-[20px] text-center">
          <img tw="w-full h-full" src={FooterImg} alt="" />
        </div>
        <p tw="hidden sm:block">©Hassanayo, All rights reserved</p>
      </div>
      <div tw="flex justify-center sm:justify-between items-center">
        <div tw="flex gap-[20px]">
          <TwitterLogo />
          <GithubLogo />
          <GmailLogo />
        </div>
        <div tw="gap-[50px] hidden sm:flex">
          <p>Help</p>
          <p>Terms</p>
          <p>Contact</p>
          <p>Privacy</p>
        </div>
      </div>
    </section>
  );
}
