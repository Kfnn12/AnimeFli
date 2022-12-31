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
export default function MovieCard({movieDetails}: any) {
  var mainTitle;
  if (movieDetails){
    if(movieDetails.title){
      mainTitle = movieDetails.title
    }
    else mainTitle = movieDetails.name
  }
  return (
    <div tw="inline-block ">
      <MovieCardWrapper>
        <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt="alt" />
        
        {/* <div tw="hidden" className="bottom">
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
              <p tw="text-[16px]">{movieDetails?.original_title}</p>
            </div>
            <p>{movieDetails?.rating}</p>
            <p>Exciting | Adventure</p>
          </div>
        </div> */}
      </MovieCardWrapper>
    </div>
  );
}
