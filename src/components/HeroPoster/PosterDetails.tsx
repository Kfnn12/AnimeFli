import React, { useEffect } from "react";
import { BodyText, H1, H3, NormalText } from "../../styles/typography";
import "twin.macro";
import PlayButton from "../Button/PlayButton";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faList,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface PosterProps {
  title: string;
  synopsis: string;
  genre?: string;
}
export default function PosterDetails(props: PosterProps) {
  const navigate = useNavigate();
  return (
    <div tw=" ml-[12px] sm:ml-[64px] mt-[100px] absolute z-[100] left-0 sm:w-[500px] flex flex-col  ">
      {/* <p tw="text-[40px]"></p> */}
      <H1>{props.title}</H1>
      <div tw="flex flex-col gap-[20px]">
        <div tw="flex gap-3 mt-2">
          <div tw=" py-1 px-[8px]  w-fit  flex justify-center items-center bg-secondary rounded-sm ">
            <p tw="text-[12px]">Series</p>
          </div>
          <div tw="py-1 px-[8px] w-fit  flex justify-center items-center bg-secondary rounded-sm ">
            <p tw="text-[12px]">Action</p>
          </div>
        </div>
        <div tw="hidden sm:block whitespace-normal">
          <BodyText tw="text-[12px] sm:text-[16px]">
            {props.synopsis}
          </BodyText>
        </div>
        <div tw="hidden sm:block">
          <H3>New Series!</H3>
        </div>
        <div tw="flex gap-[20px]">
          <Button onClick={() => navigate(`/${props.title}/1`)} variant="icon">
            <FontAwesomeIcon size="2xl" icon={faPlay} />
          </Button>
          <Button onClick={() => navigate(`/${props.title}`)} variant="outline">
            <FontAwesomeIcon icon={faCircleInfo} /> More Info
          </Button>
          <Button variant="outline">
            <FontAwesomeIcon icon={faList} /> Add to list
          </Button>
        </div>
      </div>
    </div>
  );
}
