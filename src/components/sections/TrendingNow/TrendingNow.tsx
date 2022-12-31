import "twin.macro";
import MovieCard from "../../MovieCard/MovieCard";
import Image from "../../assets/images/337745.jpeg";
import MovieInfo from "./MovieInfo";
import tw, { styled } from "twin.macro";
import Row from "../../Row/Row";

export default function TrendingNow() {
  return (
    <Row title="Trending" rowID={0}>
      {MovieInfo.map((movie, idx) => (
        <MovieCard
          image={movie.image}
          key={idx}
          title={movie.title}
          url={movie.url}
        />
      ))}
    </Row>
  );
}
