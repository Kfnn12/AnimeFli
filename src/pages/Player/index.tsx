import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getAPI } from "../../api";
import "twin.macro";
import { styled } from "twin.macro";
import { BodyText, H3, H4 } from "../../styles/typography";
import Row from "../../components/Row/Row";
import requests from "../../utils/requests";

export default function Player() {
  const { id, episode } = useParams();
  const location = useLocation();
  const [streamLink, setStreamLink] = useState<any>([]);
  const [episodeNum, setEpisodeNum] = useState<number | any>();
  const anime: any = useLoaderData();

  console.log(streamLink);

  const navigate = useNavigate();
  function changeEpisode(idx: number) {
    setEpisodeNum(idx);
    navigate(`/${id}/${idx}`);
  }
  function NextEpisode() {
    if (episode) {
      navigate(`/${id}/${parseInt(episode) + 1}`);
    }
  }
  function PreviousEpisode() {
    if (episode) {
      navigate(`/${id}/${parseInt(episode) - 1}`);
    }
  }

  // get streaming urls
  useEffect(() => {
    getAPI("watch", `${id}-episode-${episode}`).then((res) => {
      if (res.status === 200) {
        setStreamLink(res.data.headers);
      }
    });
  }, [episode]);
  return (
    <div tw=" flex justify-center flex-col ">
      <p tw="mx-[14px] sm:mx-[64px] mb-4 p-2 bg-orange2">
        {id} episode {episode}
      </p>
      <div tw="flex flex-col xl:flex-row justify-between gap-y-8 mb-5 mx-[14px] sm:mx-[64px]">
        <div tw="flex flex-col justify-center items-center">
          <div tw="w-full sm:w-[686px] h-[290px] sm:h-[385.875px] ">
            <div tw=" w-full h-full ">
              {streamLink.Referer ? (
                <iframe
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
          <div tw="w-full m-1 text-[12px] text-orange2 flex justify-between">
            <button onClick={PreviousEpisode}>
              <p>Prev Episode</p>
            </button>
            <button onClick={NextEpisode}>
              <p>Next Episode</p>
            </button>
          </div>
        </div>
        <div tw="flex justify-center ">
          <div tw="w-full">
            <H4>Episodes</H4>
            <EpisodesGrid>
              {anime?.episodes?.map((item: any, idx: number) => (
                <button
                  tw="p-2 bg-secondary text-[10px]  hover:opacity-[0.7]  flex justify-center items-center  h-[30px]"
                  key={idx}
                  onClick={() => changeEpisode(idx + 1)}
                >
                  EP {idx + 1}
                </button>
              ))}
            </EpisodesGrid>
          </div>
        </div>
      </div>
      <div>
        <Row title="Similar" rowID={0} fetchURL="top-airing" />
      </div>
    </div>
  );
}

const EpisodesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 20px;
  /* min-width: 400px; */
  width: 100%;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
