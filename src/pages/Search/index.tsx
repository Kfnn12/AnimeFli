import { ANIME } from "@consumet/extensions";
import axios from "axios";
import { Key, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "twin.macro";
import { styled } from "twin.macro";
import { getAPI } from "../../api";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { BodyText } from "../../styles/typography";
import links from "./links";
export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [genre, setGenre] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const navigate = useNavigate()

  //get search results
  useEffect(() => {
    getAPI(`${keyword}?page=${1}`).then((res) => {
      if (res.status === 200) {
        setSearchResults(res.data.results);
        // console.log(res.data);
      } else {
        console.log(res);
      }
    });
  }, [keyword]);
  console.log(searchResults);

  // get genres
  useEffect(() => {
    if (genre) {
      axios
        .get(`https://gogoanime.consumet.org/genre/${genre}`)
        .then((res) => console.log(res.data));
    }
  });
  return (
    <div tw="mx-[12px] sm:mx-[64px]">
      <div tw="mb-3 relative">
        <input
          tw="h-[30px] w-full text-grayText text-[14px] focus:outline-0  border-2 border-secondary bg-transparent  p-2 flex items-center justify-center "
          type="text"
          placeholder="Search for anime"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        {keyword ? (
          <div tw="absolute w-full mt-[10px] max-h-[400px] overflow-y-scroll z-[100] bg-primary border-2 border-secondary border-solid ">
            {searchResults?.map((item: any, idx: Key) => (
              <div
                key={idx}
                tw="w-full flex items-center gap-3 h-[80px] hover:bg-secondary cursor-pointer p-[15px]"
                onClick={() => navigate(`/${item.id}`)}
              >
                <img tw="h-full w-[50px]" src={item.image} alt="" />
                <div tw="flex flex-col justify-between  h-full ">
                  <p tw="text-orange2">{item.title}</p>
                  <p tw="text-[12px] text-grayText">{item.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div tw="flex">
        <div tw="grid grid-cols-2 sm:grid-cols-5 gap-x-3.5 gap-y-3">
          {links.map((item: any, idx: Key) => (
            <GenreCards key={idx} onClick={() => setGenre(item.url)}>
              <Link to={item.url}>
                <img src={item.img} alt="" />
                <div className="overlay">
                  <BodyText>{item.genre}</BodyText>
                </div>
              </Link>
            </GenreCards>
          ))}
        </div>
      </div>
    </div>
  );
}

export const GenreCards = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 10px;

  overflow: hidden;
  position: relative;
  img {
    height: 200px;
    width: 100%;
    object-fit: fill;
    opacity: 0.6;
  }
  .overlay {
    color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 20px;
  }
  :hover {
    .overlay {
      opacity: 1;
    }
    img {
      transition: all 0.5s;
      -webkit-transition: all 0.5s;
      opacity: 0.9;
    }
  }
`;
