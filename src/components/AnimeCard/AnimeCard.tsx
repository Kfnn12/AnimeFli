import "twin.macro";
import { useEffect, useState } from "react";
import { styled } from "twin.macro";
import axios from "axios";
import { BodyText } from "../../styles/typography";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton";

export default function AnimeCard({ anime }: any) {
  const [list, setList] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      axios
        .get(`https://gogoanime.consumet.stream/anime-details/${anime.animeId}`)
        .then((response) => setList(response.data));
      setIsLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);
  // console.log(isLoading);
  function watchAnime() {
    console.log(location);
    if (anime.type === "Movie") {
    } else {
      navigate(`/${anime.animeId}`);
    }
  }

  return (
    <div tw="inline-block  ">
      {isLoading && <Skeleton />}
      {!isLoading && (
        <AnimeCardWrapper>
          <img src={anime.animeImg} alt="alt" />

          <div className="overlay">
            <div tw="h-[35px] truncate whitespace-normal ">
              <BodyText tw="text-[17px] text-orange2">
                {list?.animeTitle}
              </BodyText>
            </div>
            <div tw="mt-[20px] flex flex-col gap-[8px]">
              <p tw="text-[12px]">{list?.type}</p>
              <p tw="text-[12px]">{list?.status}</p>
              <p tw="text-[12px] text-orange2">
                <span tw="text-white">Genres:</span>{" "}
                {list?.genres?.slice(0, 3).join(", ")}
              </p>
            </div>
            <div tw="flex justify-end gap-2 mt-[8px]">
              <Button size="small" onClick={watchAnime} variant="icon">
                <FontAwesomeIcon icon={faPlay} />
              </Button>
              <Button tw="bg-none bg-white" size="small" variant="icon">
                <FontAwesomeIcon icon={faInfo} />
              </Button>
            </div>
          </div>
        </AnimeCardWrapper>
      )}
    </div>
  );
}

export const AnimeCardWrapper = styled.div`
  display: flex;
  align-items: center;
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
    border: 1px solid white;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;
