import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "twin.macro";
import { styled } from "twin.macro";
import { getAPI } from "../../api";
import { ReactComponent as PlayIcon } from "../../assets/icons/play.svg";
export default function EpisodeModal({ anime, setIsOpen }: any) {
  const [animeDetails, setAnimeDetails] = useState<any>([]);

  useEffect(() => {
    getAPI("anime-details", `${anime.animeId}`).then((res) => {
      if (res.status === 200) {
        setAnimeDetails(res.data);
        console.log(animeDetails);
      } else {
        console.log(res);
      }
    });
  }, []);
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
                  </div>
                  <div tw="mt-[20px] flex gap-7">
                    <button tw="bg-red flex justify-center gap-2 items-center w-[145px] h-[36px] rounded-[8px] text-white">
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

const ModalWrapper = styled(EpisodeModal)`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 500px;
    height: 50vh;
    background: #dbd5d5;
    color: white;
    z-index: 100;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    height: 50px;
    background: white;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .heading {
    margin: 0;
    padding: 10px;
    color: #2c3e50;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
  }

  .modalContent {
    padding: 10px;
    font-size: 14px;
    color: #2c3e50;
    text-align: center;
  }

  .modalActions {
    position: absolute;
    bottom: 2px;
    margin-bottom: 10px;
    width: 100%;
  }

  .actionsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
