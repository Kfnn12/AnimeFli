import React from "react";
import { styled } from "twin.macro";

export default function SlideshowImages({ image }: any) {
  return (
    <div tw=" w-full h-[700px] flex  gap-3.5 shrink-0 overflow-hidden ">
      <img src={image[0]} alt="image" />
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
