import "twin.macro";
import MovieCard from "../../MovieCard/MovieCard";
import Image from "../../assets/images/337745.jpeg";
import MovieInfo from "./MovieInfo";
import tw, { styled } from "twin.macro";
import Row from "../../Row/Row";
import requests from "../../../utils/requests";

export default function TrendingNow() {
  
  return (
    <Row title="Trending" fetchURL={requests.fetchPopular} rowID={0}/>
  );
}
