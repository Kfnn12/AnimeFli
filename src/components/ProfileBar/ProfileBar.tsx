import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import "twin.macro"
export default function ProfileBar() {
  return (
    <div tw="flex items-center gap-[11.5px]">
      <p>Hassan Ayomide</p>
      <ProfileIcon />
    </div>
  );
}
