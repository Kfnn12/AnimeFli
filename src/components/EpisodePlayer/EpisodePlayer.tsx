import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "twin.macro";
import { getAPI } from "../../api";

export default function EpisodePlayer() {
  const [episodeDetails, setEpisodeDetails] = useState<any>([]);
  const [streamLink, setStreamLink] = useState<any>([]);
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

  // get streaming urls
  useEffect(() => {
    getAPI("vidcdn/watch", `${id}`).then((res) => {
      console.log(id);

      if (res.status === 200) {
        setStreamLink(res.data);
        console.log(streamLink);
      } else {
        console.log(res);
      }
    });
  }, []);
  const watcher = streamLink?.Referer;
  console.log(watcher);

  return (
    <div>
      <p>{id}</p>
      <div tw="relative overflow-hidden w-full pt-[56.25%] border-2 border-indigo-600">
        {streamLink.Referer && (
          <iframe
            // width="853"
            // height="480"
            src={`${streamLink.Referer}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded episode"
            loading="eager"
            tw="absolute w-full h-full top-0 left-0 right-0 bottom-0"
          />
        )}
      </div>
    </div>
  );
}
