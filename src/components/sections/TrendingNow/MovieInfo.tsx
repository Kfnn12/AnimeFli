import Image1 from "../../../assets/images/337745.jpeg";
import Image2 from "../../../assets/images/199475.jpg";
import Image3 from "../../../assets/images/495315.jpg";
import Image4 from "../../../assets/images/606036.jpg";
import Image5 from "../../../assets/images/img1.jpg";
import { ReactComponent as Images } from "../../assets/icons/calculator.svg";
interface MovieDetails {
  title: string;
  url?: string;
  image?: string;
  rating?: string;
}
const MovieInfo: MovieDetails[] = [
  {
    title: "Ironman",
    url: "/",
    image: Image1,
  },
  {
    title: "Spiderman",
    url: "/wallets",
    image: Image2,
  },
  {
    title: "Inside Job",
    url: "/markets",
    image: Image3,
  },
  {
    title: "Rick & Morty",
    url: "/events",
    image: Image4,
  },
  {
    title: "Rick & Morty",
    url: "/events",
    image: Image5,
  },
  {
    title: "Ironman",
    url: "/",
    image: Image1,
  },
  {
    title: "Spiderman",
    url: "/wallets",
    image: Image2,
  },
  {
    title: "Inside Job",
    url: "/markets",
    image: Image3,
  },
  {
    title: "Rick & Morty",
    url: "/events",
    image: Image4,
  },
  {
    title: "Rick & Morty",
    url: "/events",
    image: Image5,
  },
];
export default MovieInfo;
