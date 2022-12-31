import MovieCard from "../../MovieCard/MovieCard";
import Row from "../../Row/Row";
import MovieInfo from "../TrendingNow/MovieInfo";

export default function Popular() {
  return (
    <Row title="Popular Shows" rowID={1}>
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
