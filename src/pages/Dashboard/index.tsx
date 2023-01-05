import "twin.macro"
import Button from "../../components/Button/Button";
import {ReactComponent as PlayIcon} from "../../assets/icons/play.svg"
import TrendingNow from "../../components/sections/TrendingNow/TrendingNow";
import PlayButton from "../../components/Button/PlayButton";

export default function Dashboard() {
  return (
    <main>
      <TrendingNow/>
      <PlayButton/>
    </main>
  );
}
