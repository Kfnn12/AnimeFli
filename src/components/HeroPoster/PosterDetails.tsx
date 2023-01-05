import React from "react";
import { BodyText, H1, H3, NormalText } from "../../styles/typography";
import "twin.macro";
import PlayButton from "../Button/PlayButton";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faList } from "@fortawesome/free-solid-svg-icons";

interface PosterProps {
  title: string
  synopsis: string
  genre?: string;

}
export default function PosterDetails(props: PosterProps) {
  return (
    <div tw=" ml-10 mt-[100px] absolute left-0 w-[500px] flex flex-col  ">
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
      <div tw=" whitespace-normal">
        <BodyText>
          {props.synopsis}
          {/* Senju and Taiju have to rescue a civilian: completely disappeared and
          frozen */}
        </BodyText>
      </div>
      <div>
        <H3>New Series!</H3>
      </div>
        <div tw="flex gap-[20px]">
          <PlayButton />
          <Button variant="outline"><FontAwesomeIcon icon={faCircleInfo}/> More Info</Button>
          <Button variant="outline"><FontAwesomeIcon icon={faList}/> Add to list</Button>
        </div>
      </div>
    </div>
  );
}
