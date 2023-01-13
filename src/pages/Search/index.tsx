import axios from "axios";
import { Key, useEffect, useState } from "react";
import "twin.macro";
import { styled } from "twin.macro";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { BodyText } from "../../styles/typography";
import links from "./links";
export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<any>([]);

  //get search results
  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/search?keyw=${keyword}`)
      .then((res) => setSearchResults(res.data));
  }, [keyword]);
  console.log(searchResults);

  // get genres

  return (
    <div tw="mx-[64px] ">
      <div tw="mb-3">
        <input
          tw="h-[30px] w-full text-grayText text-[14px] focus:outline-0  border-2 border-secondary bg-transparent rounded-2xl p-2 flex items-center justify-center "
          type="text"
          placeholder="Search for anime"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div tw="flex">
        <div tw="grid grid-cols-5 gap-x-3.5 gap-y-3">
          {links.map((item: any, idx: Key) => (
            <GenreCards key={idx}>
              <img src={item.img} alt="" />
              <div className="overlay">
                <BodyText>{item.genre}</BodyText>
              </div>
            </GenreCards>
          ))}
        </div>
      </div>
    </div>
  );
}

const GenreCards = styled.div`
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
