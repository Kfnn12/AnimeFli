import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPI } from "../../api";
import "twin.macro";
import { styled } from "twin.macro";
import { BodyText, H3, H4 } from "../../styles/typography";
import Row from "../../components/Row/Row";
import requests from "../../utils/requests";

export default function AnimeDetails() {
  const [episodeDetails, setEpisodeDetails] = useState<any>([]);
  const [streamLink, setStreamLink] = useState<any>([]);
  const { id } = useParams();
  const [episodeNumber, setEpisodeNumber] = useState<number>(1);
  useEffect(() => {
    getAPI("anime-details", `${id}`).then((res) => {
      if (res.status === 200) {
        // console.log(res.data);
        setEpisodeDetails(res.data);
      } else {
        console.log(res);
      }
      if (episodeDetails) {
        const container: any = [];
        episodeDetails?.episodesList?.map((anime: any, idx: number) => {
          container[idx + 1] = anime.episodeId;
        });
        console.log(container);
      }
    });
  }, []);
  // console.log(episodeDetails);

  // useEffect(() => {
  //   getAPI("anime-details", `${anime.animeId}`).then((res) => {
  //     if (res.status === 200) {
  //       setAnimeDetails(res.data);
  //       console.log(animeDetails?.episodesList[0].episodeId)
  //     } else {
  //       console.log(res);
  //     }
  //   });
  // }, []);
  function changeEpisode(idx: number) {
    useEffect(() => {
      getAPI("vidcdn/watch", `${id}-episode-${idx}`).then((res) => {
        // console.log(id);

        if (res.status === 200) {
          setStreamLink(res.data);
          // console.log(streamLink);
        } else {
          // console.log(res);
        }
      });
    }, []);
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
        <div tw="">
          <div tw="bg-orange2 p-3 mb-[30px]">
            <BodyText>Anime Info</BodyText>
          </div>
          <div tw="flex gap-2">
            <div tw="w-[260px] h-[408px]">
              <img
                tw="h-[100%] w-[100%]"
                src={episodeDetails.animeImg}
                alt=""
              />
            </div>
            <div tw="max-w-[350px] flex flex-col gap-[10px] text-[12px]">
              <p>
                <span tw="text-orange2">Name: </span>
                {episodeDetails.animeTitle}
              </p>
              <p>
                <span tw="text-orange2">Type: </span>
                {episodeDetails.type}
              </p>
              <p>
                <span tw="text-orange2">Plot Summary: </span>
                {episodeDetails.synopsis}
              </p>
              <p>
                <span tw="text-orange2">Genre: </span>
                {episodeDetails.genres?.join(", ")}
              </p>
              <p>
                <span tw="text-orange2">Released: </span>
                {episodeDetails.releasedDate}
              </p>
              <p>
                <span tw="text-orange2">Status: </span>
                {episodeDetails.status}
              </p>
              <p>
                <span tw="text-orange2">Other Names: </span>
                {episodeDetails.otherNames}
              </p>
            </div>
          </div>
        </div>
        <div tw="flex justify-center ">
          <div>
            <H4>Episodes</H4>
            <EpisodesGrid>
              {episodeDetails?.episodesList?.map((anime: any, idx: number) => (
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
        <Row title="Similar" rowID={0} fetchURL={requests.fetchTopAiring}/>
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
