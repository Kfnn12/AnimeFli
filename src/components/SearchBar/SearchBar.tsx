import "twin.macro";
import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg"

export default function SearchBar() {
  return (
    <div tw="bg-[#2A2B31] min-w-[245px] min-h-[35px] flex items-center px-[12px] py-[10px] justify-between rounded-[2px] ">
      <input tw="placeholder:leading-[15px] text-[13px] placeholder:text-[#42434b] bg-transparent w-full outline-none" placeholder="Search"/>
      <SearchIcon/>
    </div>
  );
}
