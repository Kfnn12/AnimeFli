import Image1 from "../../assets/images/onepiece.png"
import Image2 from "../../assets/images/199475.jpg"
import Image3 from "../../assets/images/337745.jpeg"
import Image4 from "../../assets/images/495315.jpg"
import Image5 from "../../assets/images/606036.jpg"
import Image6 from "../../assets/images/chainsawman.jpg"
import Image7 from "../../assets/images/img1.jpg"
import Image8 from "../../assets/images/naruto.jpg"
import Image9 from "../../assets/images/vinland.jpg"
import Image10 from "../../assets/images/495315.jpg"
interface GenreLinks {
  genre: string
  url: string
  img: React.ReactNode
}
const links: GenreLinks[] = [
  {
    genre: "Action",
    url: "action",
    img: Image1
  },
  {
    genre: "Adventure",
    url: "adventure",
    img: Image2
  },
  {
    genre: "Comedy",
    url: "comedy",
    img: Image3
  },
  {
    genre: "Crime",
    url: "Crime",
    img: Image4
  },
  {
    genre: "Demons",
    url: "demons",
    img: Image5
  },
  {
    genre: "Dub",
    url: "dub",
    img: Image6
  },
  {
    genre: "Family",
    url: "family",
    img: Image7
  },
  {
    genre: "Fantasy",
    url: "fantasy",
    img: Image8
  },
  {
    genre: "Game",
    url: "game",
    img: Image9
  },
  {
    genre: "Horror",
    url: "horror",
    img: Image10
  },
  {
    genre: "Shounen",
    url: "horror",
    img: Image3
  },
  {
    genre: "Shounen",
    url: "shounen",
    img: Image1
  },
];

export default links;
