import "twin.macro";
import Image from "../../assets/images/337745.jpeg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { MovieCardWrapper } from "./style";

interface MovieCardProps {
  title?: string;
  url?: string;
  image?: string;
  rating?: string;
}
export default function MovieCard(props: MovieCardProps) {
  return (
    <div tw="inline-block ">
      <MovieCardWrapper>
        <img src={props.image} alt="alt" />
        <div className="bottom">
          <div tw="flex gap-2">
            <button tw="w-[30px] text-white rounded-[11px] bg-[#D22F27] h-[30px]">
              <PlayIcon tw="w-[10px] h-[10px]" />
            </button>
            <button tw="w-[30px] font-light  rounded-[11px]  h-[30px] backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5)]">
              +
            </button>
          </div>

          <div tw="text-[7px] flex flex-col gap-1">
            <div>
              <p tw="text-[16px]">{props.title}</p>
            </div>
            <p>{props.rating}</p>
            <p>Exciting | Adventure</p>
          </div>
        </div>
      </MovieCardWrapper>
    </div>
  );
}
