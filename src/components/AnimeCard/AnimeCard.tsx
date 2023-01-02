import "twin.macro";
import Image from "../../assets/images/337745.jpeg";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
import { EpisodeCardWrapper } from "./style";
import { useState } from "react";
import EpisodeModal from "../EpisodeModal/EpisodeModal";

interface MovieCardProps {
  title?: string;
  url?: string;
  image?: string;
  rating?: string;
}
export default function AnimeCard({ anime }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div tw="inline-block ">
      <EpisodeCardWrapper onClick={() => setIsOpen(true)}>
        <img src={anime.animeImg} alt="alt" />

        <div>
          <p>{anime.animeTitle}</p>
          <p>ep {anime.episodeNum}</p>
        </div>
      </EpisodeCardWrapper>
      {isOpen && <EpisodeModal anime={anime} setIsOpen={setIsOpen}/>}
    </div>
  );
}
