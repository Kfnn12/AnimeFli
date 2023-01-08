import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPI } from "../../api";
import "twin.macro";
import { styled } from "twin.macro";
import { BodyText, H3, H4 } from "../../styles/typography";

export default function AnimeDetails() {
  const [episodeDetails, setEpisodeDetails] = useState<any>([]);
  const [streamLink, setStreamLink] = useState<any>([]);
  const { id } = useParams();
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

  // get streaming urls
  useEffect(() => {
    getAPI("vidcdn/watch", `${id}-episode-1`).then((res) => {
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
      <div tw="flex justify-between gap-2 mb-5">
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
        <div></div>
      </div>
      <div>
        <H4>Episodes</H4>
        <EpisodesGrid>
          {episodeDetails?.episodesList?.map((anime: any, idx: number) => (
            <button
              tw="p-2 bg-secondary text-[12px] hover:opacity-[0.7]  w-[fit] flex justify-center items-center w-[30px] h-[30px]"
              key={idx}
            >
              {idx + 1}
            </button>
          ))}
        </EpisodesGrid>
      </div>
      {/* <p>{id}</p>
      <div tw=" m-auto">
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
        <EpisodesGrid>
          {episodeDetails?.episodesList?.map((anime: any, idx: number) => (
            <button
              tw="p-2 bg-secondary w-[fit] text-center h-[30px]"
              key={idx}
            >
              {idx + 1}
            </button>
          ))}
        </EpisodesGrid>
      </div> */}
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
  /* display: grid;
  grid-template-columns: repeat(20, minmax(0, 1fr));
  gap: 5px;
  padding: 5px;
  height: 300px;
  overflow-y: scroll; */
`;
