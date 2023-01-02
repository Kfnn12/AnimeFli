import React from "react";
import { styled } from "twin.macro";

export default function SlideshowImages({ anime }: any) {
  return (
    <div tw="p-[40px]  w-full h-[380px] flex  gap-3.5 shrink-0 overflow-hidden ">
      <div tw="w-[50%]">
        <p tw="text-black text-[42px] font-medium">SPIDERMAN</p>
        <p tw="font-light ">
          ACTION, ADVENTURE, COMEDY <span tw="text-[12px] ml-2">%94 match</span>
        </p>
        <div tw="flex gap-[10px] ">
          <button tw="w-[100px] rounded-[11px] bg-[#D22F27] h-[40px]">
            Watch
          </button>
          <button tw="w-[50px] font-light text-[24px] rounded-[11px]  h-[40px] backdrop-blur-[10px] bg-[rgba(69, 71, 82, 0.5)]">
            +
          </button>
        </div>
      </div>
      <div tw="w-[20%]">
        <img tw="w-full h-[100%]" src={anime.animeImg} alt="image" />
      </div>
    </div>
  );
}

const sty = styled.div`
  .box {
    padding: 40px;
    background: #00e7ff;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 14px;
    flex-shrink: 0;
    overflow: hidden;
  }
`;
