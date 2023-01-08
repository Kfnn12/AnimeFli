import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getAPI } from "../../api";
import "twin.macro";
import { styled } from "twin.macro";
import { BodyText, H3, H4 } from "../../styles/typography";
import Row from "../../components/Row/Row";
import requests from "../../utils/requests";

export default function AnimeDetails() {
  const [streamLink, setStreamLink] = useState<any>([]);
  const { id, episode } = useParams();
  const anime: any = useLoaderData();

  function changeEpisode(idx: number) {
    getAPI("vidcdn/watch", `${id}-episode-${idx}`).then((res) => {
      // console.log(id);

      if (res.status === 200) {
        setStreamLink(res.data);
        // console.log(streamLink);
      } else {
        // console.log(res);
      }
    });
  }

  // get streaming urls
  useEffect(() => {
    getAPI("vidcdn/watch", `${id}-episode-2`).then((res) => {
      // console.log(id);

      if (res.status === 200) {
        setStreamLink(res.data);
        // console.log(streamLink);
      } else {
        // console.log(res);
      }
    });
  }, []);
  const watcher = streamLink?.Referer;
  // console.log(watcher);
  return (
    <div tw=" flex justify-center flex-col ">
      <div tw="flex justify-between gap-2 mb-5 mx-[64px]">
        <div tw="flex justify-center items-center">
          <div tw="w-[686px] h-[385.875px] ">
            <div tw=" w-full h-full  ">
              {streamLink.Referer ? (
                <iframe
                  // width="853"
                  // height="480"
                  src={`${streamLink.Referer}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded episode"
                  loading="eager"
                  tw=" w-full h-full top-0 left-0 right-0 bottom-0"
                />
              ) : (
                <>Loading</>
              )}
            </div>
          </div>
        </div>
        <div tw="flex justify-center ">
          <div>
            <H4>Episodes</H4>
            <EpisodesGrid>
              {anime?.episodesList?.map((anime: any, idx: number) => (
                <button
                  tw="p-2 bg-secondary text-[12px]  hover:opacity-[0.7]  w-[fit] flex justify-center items-center w-[30px] h-[30px]"
                  key={idx}
                  onClick={() => changeEpisode(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            </EpisodesGrid>
          </div>
        </div>
      </div>
      <div>
        <Row title="Similar" rowID={0} fetchURL={requests.fetchTopAiring} />
      </div>
    </div>
  );
}

const EpisodesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 400px;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
`;
