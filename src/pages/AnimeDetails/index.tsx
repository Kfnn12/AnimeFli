import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getAPI } from "../../api";
import "twin.macro";
import { styled } from "twin.macro";
import { BodyText, H3, H4 } from "../../styles/typography";
import Row from "../../components/Row/Row";
import requests from "../../utils/requests";

export default function AnimeDetails() {
  const [streamLink, setStreamLink] = useState<any>([]);
  const { id } = useParams();
  const anime: any = useLoaderData();
  const navigate = useNavigate();
  console.log(anime);
  
  function changeEpisode(idx: number) {
    navigate(`/${id}/${idx}`);
    
  }

  
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
              <img tw="h-[100%] w-[100%]" src={anime.animeImg} alt="" />
            </div>
            <div tw="max-w-[350px] flex flex-col gap-[10px] text-[12px]">
              <p>
                <span tw="text-orange2">Name: </span>
                {anime.animeTitle}
              </p>
              <p>
                <span tw="text-orange2">Type: </span>
                {anime.type}
              </p>
              <p>
                <span tw="text-orange2">Plot Summary: </span>
                {anime.synopsis}
              </p>
              <p>
                <span tw="text-orange2">Genre: </span>
                {anime.genres?.join(", ")}
              </p>
              <p>
                <span tw="text-orange2">Released: </span>
                {anime.releasedDate}
              </p>
              <p>
                <span tw="text-orange2">Status: </span>
                {anime.status}
              </p>
              <p>
                <span tw="text-orange2">Other Names: </span>
                {anime.otherNames}
              </p>
            </div>
          </div>
        </div>
        <div tw="flex justify-center ">
          <div>
            <H4>Episodes</H4>
            <EpisodesGrid>
              {anime?.episodesList?.map((item: any, idx: number) => (
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
