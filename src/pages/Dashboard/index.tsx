import "twin.macro"
import HeroPoster from "../../components/HeroPoster/HeroPoster";
import MovieCard from "../../components/MovieCard/MovieCard";
import Popular from "../../components/sections/Popular/Popular";
import TrendingNow from "../../components/sections/TrendingNow/TrendingNow";

export default function Dashboard() {
  return (
    <main>
      <section >
        <HeroPoster />
      </section>
      <TrendingNow/>
      <Popular/>
    </main>
  );
}
