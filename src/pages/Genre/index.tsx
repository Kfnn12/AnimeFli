import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BodyText, H1 } from "../../styles/typography";
import "twin.macro";
import { GenreCards } from "../Search";
import { Key, useEffect, useState } from "react";
import { AnimeCardWrapper } from "../../components/AnimeCard";
import { styled } from "twin.macro";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button/Button";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Genre() {
  const [list, setList] = useState<any>();
  const { genre } = useParams();
  const anime: any = useLoaderData();
  const navigate = useNavigate();
  console.log(anime);
  

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/anime-details/${anime.animeId}`)
      .then((response) => setList(response.data));
  }, []);
  console.log(list);
  
  function watchAnime() {
    console.log(location);
    navigate(`/${anime.animeId}`);
  }
  return (
    <div tw="mx-[64px]">
      <H1>{genre}</H1>
      <div tw="grid grid-cols-5 gap-x-3 gap-y-3">
        {anime.map((item: any, idx: Key) => (
          <GenreTitleCard tw="max-w-[230px] h-fit" key={idx}>
            <img src={item.animeImg} alt="" />
              <div className="overlay">
                <div tw="h-[35px] truncate whitespace-normal ">
                  <BodyText tw="text-[17px] text-orange2">
                    {item.animeTitle}
                  </BodyText>
                </div>
                <div tw="flex justify-end gap-2 mt-[8px]">
                  <Button size="small" onClick={() => navigate(`/${item.animeId}`)} variant="icon">
                    <FontAwesomeIcon icon={faPlay} />
                  </Button>
                  <Button tw="bg-none bg-white" size="small" variant="icon">
                    <FontAwesomeIcon icon={faInfo} />
                  </Button>
                </div>
              </div>
          </GenreTitleCard>
        ))}
      </div>
    </div>
  );
}
const GenreTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  gap: 10px;
  overflow: hidden;
  height: 180px;
  cursor: pointer;
  width: 250px;
  border-radius: 10px;
  text-align: left;
  white-space: normal;
  position: relative;
  img {
    width: 100%;
    height: 220px;
    object-fit: fill;
  }
  .overlay {
    color: #fff;
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    padding: 20px;
  }
  :hover {
    .overlay {
      opacity: 1;
    }
    /* border: 1px solid white; */
  }
`;
