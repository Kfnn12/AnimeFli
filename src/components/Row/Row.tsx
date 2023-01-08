import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowRight } from "../../assets/icons/caretRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/caretLeft.svg";
import { styled } from "twin.macro";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import AnimeCard from "../AnimeCard/AnimeCard";
import EpisodeModal from "../EpisodeModal/EpisodeModal";
import { H3, H4 } from "../../styles/typography";
interface RowProps {
  title: string;
  rowID: number;
  fetchURL: string;
}

export default function Row(props: React.PropsWithChildren<RowProps>) {
  const [movies, setMovies] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (props.fetchURL != undefined) {
      axios.get(props.fetchURL).then((response) => {
        setMovies(response.data);
      });
      if (movies) {
        const container: any = []
        movies?.map((anime: any, idx: number) => {
          container[idx] = anime.episodeId
        } );
        console.log(container);
        
      }
    }
  }, [props.fetchURL]);
  
  // console.log(container);
  

  const slideLeft = () => {
    var slider: any = document.getElementById("slider" + props.rowID);
    slider.scrollLeft = slider?.scrollLeft - 290;
  };
  const slideRight = () => {
    var slider: any = document.getElementById("slider" + props.rowID);
    slider.scrollLeft = slider.scrollLeft + 290;
  };

  return (
    <Wrapper>
      <H4 tw="mx-[27px] py-2">{props.title}</H4>
      {/* <p tw="py-5 mx-[27px] text-[#5A6073] font-medium">{props.title}</p> */}
      <div tw="relative">
        <button
          tw="absolute opacity-0  h-[220px] w-[40px] z-10 left-[0px] bottom-[16px]  rounded-lg  hover:opacity-100 flex justify-center items-center backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5)]"
          onClick={slideLeft}
        >
          <ArrowLeft />
        </button>
        <div
          className="row"
          id={"slider" + props.rowID}
          tw="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth  relative"
        >
          <div tw="w-full h-full ml-[18px]  whitespace-nowrap scroll-smooth  relative">
            {movies?.map((anime: any, idx: number) => (
              <AnimeCard setIsOpen={setIsOpen} key={idx} anime={anime} />
            ))}
          </div>
        </div>
        <button
          tw="absolute  h-full w-[40px]  right-0 bottom-[0px] opacity-0 rounded-lg  hover:opacity-100 flex justify-center items-center backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5)]"
          onClick={slideRight}
        >
          <ArrowRight />
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 0;
  margin: 10px 0;
  width: 100vw;
  position: relative;
  scroll-behavior: smooth;
  .row {
    ::-webkit-scrollbar {
      width: 2px;
      height: 2px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: none;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 10px;
    }
  }
`;
