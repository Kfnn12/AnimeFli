import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "twin.macro";
import Poster1 from "../../assets/images/chainsaw.jfif";
import Button from "../Button/Button";

export default function MobileLanding() {
  return (
    <div tw="mx-[12px]">
      <div>
        <img
          src={Poster1}
          tw="h-[390px] rounded-[10px] overflow-hidden w-full"
          alt="poster-image"
        />
      </div>
      <div tw="mt-[20px] mb-[30px] flex gap-4 items-center justify-center">
        <Button variant="icon">
          <a href="chainsaw-man/1">
            <FontAwesomeIcon size="2xl" icon={faPlay} />
          </a>
        </Button>
        <Button variant="outline">
          <a href="chainsaw-man" tw="flex gap-1">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>More Info</p> 
          </a>
        </Button>
      </div>
    </div>
  );
}
