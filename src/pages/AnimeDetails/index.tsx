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

  function goToEpisode(idx: number) {
    navigate(`/${id}/${idx}`);
  }

  // const watcher = streamLink?.Referer;
  // console.log(watcher) ;
  return (
    <div tw=" flex justify-center flex-col ">
      <div tw="flex flex-col lg:flex-row justify-between gap-y-8 mb-5 mx-[14px] sm:mx-[64px]">
        <div tw="">
          <div tw="bg-orange2 p-3 mb-[30px]">
            <BodyText>Anime Info</BodyText>
          </div>
          <div tw="flex flex-col sm:flex-row gap-2">
            <div tw="w-full sm:w-[260px] h-[408px]">
              <img tw="h-[100%] w-[100%]" src={anime.image} alt="" />
            </div>
            <div tw="max-w-[350px] flex flex-col gap-[10px] text-[12px]">
              <p>
                <span tw="text-orange2">Name: </span>
                {anime.title}
              </p>
              <p>
                <span tw="text-orange2">Type: </span>
                {anime.type}
              </p>
              <p>
                <span tw="text-orange2">Plot Summary: </span>
                {anime.description}
              </p>
              <p>
                <span tw="text-orange2">Genre: </span>
                {anime.genres?.join(", ")}
              </p>
              <p>
                <span tw="text-orange2">Released: </span>
                {anime.releaseDate}
              </p>
              <p>
                <span tw="text-orange2">Status: </span>
                {anime.status}
              </p>
              <p>
                <span tw="text-orange2">Other Names: </span>
                {anime.otherName}
              </p>
            </div>
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
                  onClick={() => goToEpisode(idx + 1)}
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
