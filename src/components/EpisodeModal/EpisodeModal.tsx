import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useNavigate,
} from "react-router-dom";
import "twin.macro";
import { getAPI } from "../../api";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";

export default function EpisodeModal({ anime, setIsOpen }: any) {
  const [animeDetails, setAnimeDetails] = useState<any>([]);
  const navigate = useNavigate();
  const watchAnime = () => {
    navigate(`${animeDetails?.animeId}`);
  };

  useEffect(() => {
    getAPI("anime-details", `${anime.animeId}`).then((res) => {
      if (res.status === 200) {
        setAnimeDetails(res.data);
        console.log(animeDetails?.episodesList[0].episodeId)
      } else {
        console.log(res);
      }
    });
  }, []);
  console.log(animeDetails);

  return (
    <div>
      {createPortal(
        <div
          tw="bg-black/20  w-[100vw] h-[100vh]  top-[50%] left-[50%] absolute -translate-x-2/4 -translate-y-2/4"
          onClick={() => setIsOpen(false)}
        >
          <div tw="fixed z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <div tw="w-[550px] h-[400px] bg-white z-[100] rounded-2xl">
              <div tw="flex ">
                <div tw="h-[100%] w-[50%] ">
                  <img
                    tw=" h-[400px] w-[300px]"
                    src={anime?.animeImg}
                    alt="anime image"
                  />
                </div>

                <div tw="p-[17px] w-[55%]">
                  <h3 tw="text-[24px] w-[100%] font-medium text-red">
                    {anime?.animeTitle}
                  </h3>
                  <p tw="text-[12px] max-h-[100px] mt-[10px] leading-4">
                    {animeDetails.synopsis?.substring(0, 200)}...
                  </p>
                  <div tw="text-[12px] mt-[20px] flex flex-col gap-[6px]">
                    <p tw="text-[#807C7C]">
                      <span tw="text-[#544E4E]">Other Names:</span>{" "}
                      {animeDetails.otherNames}
                    </p>
                    <p tw="text-[#807C7C]">
                      <span tw="text-[#544E4E]">Type:</span> {animeDetails.type}
                    </p>
                    <p tw="text-[#807C7C]">
                      <span tw="text-[#544E4E]">Release Date:</span>{" "}
                      {animeDetails.releasedDate}
                    </p>
                    <p tw="text-[#807C7C]">
                      <span tw="text-[#544E4E]">Episodes Available:</span>{" "}
                      {animeDetails.totalEpisodes}
                    </p>
                    <p tw="text-[#807C7C]">
                      <span tw="text-[#544E4E]">Status:</span>{" "}
                      {animeDetails.status}
                    </p>
                    <p tw="text-[#807C7C]">
                      <span tw="text-[#544E4E]">Genres:</span>{" "}
                      {animeDetails.genres?.join(", ")}
                    </p>
                  </div>
                  <div tw="mt-[20px] flex gap-7">
                    <button
                      onClick={watchAnime}
                      tw="bg-red flex justify-center gap-2 items-center w-[145px] h-[36px] rounded-[8px] text-white"
                    >
                      <PlayIcon tw="w-[15px]" />
                      <p>Watch</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
