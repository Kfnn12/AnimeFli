import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "twin.macro"
import { getAPI } from "../../api";

export default function EpisodePlayer() {
  const [episodeDetails, setEpisodeDetails] = useState<any>([]);
  const { id } = useParams();
  useEffect(() => {
    getAPI("anime-details", `${id}`).then((res) => {
      if (res.status === 200) {
        setEpisodeDetails(res.data);
        console.log(episodeDetails);
      } else {
        console.log(res);
      }
    });
  }, []);
  return (
    <div>
      <p>{episodeDetails?.animeTitle}</p>
      <div tw="relative overflow-hidden w-full pt-[56.25%]">
        <iframe
          // width="853"
          // height="480"
          src={`https://gogohd.pro/streaming.php?id=MjU2MTU=&title=Naruto+Episode+220&typesub=SUB`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded episode"
          loading="eager"
          tw="absolute w-full h-full top-0 left-0 right-0 bottom-0"
        />
      </div>
    </div>
  );
}
