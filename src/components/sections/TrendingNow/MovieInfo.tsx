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




const MovieInfo= [
  {
      "adult": false,
      "backdrop_path": "/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg",
      "id": 76600,
      "title": "Avatar: The Way of Water",
      "original_language": "en",
      "original_title": "Avatar: The Way of Water",
      "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "media_type": "movie",
      "genre_ids": [
          878,
          12,
          28
      ],
      "popularity": 6226.777,
      "release_date": "2022-12-14",
      "video": false,
      "vote_average": 7.697,
      "vote_count": 3110
  },
  {
      "adult": false,
      "backdrop_path": "/lsN1wAbqCvUPKEhkEI9pQSSiTjU.jpg",
      "id": 661374,
      "title": "Glass Onion: A Knives Out Mystery",
      "original_language": "en",
      "original_title": "Glass Onion: A Knives Out Mystery",
      "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
      "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
      "media_type": "movie",
      "genre_ids": [
          9648,
          53,
          35
      ],
      "popularity": 2478.764,
      "release_date": "2022-11-23",
      "video": false,
      "vote_average": 7.052,
      "vote_count": 1540
  },
  {
      "adult": false,
      "backdrop_path": "/5wDBVictj4wUYZ31gR5WzCM9dLD.jpg",
      "id": 877269,
      "title": "Strange World",
      "original_language": "en",
      "original_title": "Strange World",
      "overview": "A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.",
      "poster_path": "/jXGMJUq9zcrScs02qkQuCtmWwaI.jpg",
      "media_type": "movie",
      "genre_ids": [
          16,
          878,
          12,
          10751
      ],
      "popularity": 1950.915,
      "release_date": "2022-11-23",
      "video": false,
      "vote_average": 6.498,
      "vote_count": 309
  },
  {
      "adult": false,
      "backdrop_path": "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
      "id": 119051,
      "name": "Wednesday",
      "original_language": "en",
      "original_name": "Wednesday",
      "overview": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
      "poster_path": "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      "media_type": "tv",
      "genre_ids": [
          10765,
          9648,
          35
      ],
      "popularity": 3911.694,
      "first_air_date": "2022-11-23",
      "vote_average": 8.729,
      "vote_count": 4251,
      "origin_country": [
          "US"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/hoVuI69nygLQBJ4FqgRKnukDeKt.jpg",
      "id": 106541,
      "name": "The Witcher: Blood Origin",
      "original_language": "en",
      "original_name": "The Witcher: Blood Origin",
      "overview": "More than a thousand years before the world of The Witcher, seven outcasts in the elven world unite in a blood quest against an unstoppable power.",
      "poster_path": "/vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg",
      "media_type": "tv",
      "genre_ids": [
          10759,
          10765
      ],
      "popularity": 673.781,
      "first_air_date": "2022-12-25",
      "vote_average": 6.043,
      "vote_count": 127,
      "origin_country": [
          "US"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/6mEYUYdkKoVCMeYf3rTFj0L1uyv.jpg",
      "id": 899112,
      "title": "Violent Night",
      "original_language": "en",
      "original_title": "Violent Night",
      "overview": "When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.",
      "poster_path": "/1XSYOP0JjjyMz1irihvWywro82r.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          35,
          80,
          53
      ],
      "popularity": 4894.213,
      "release_date": "2022-11-30",
      "video": false,
      "vote_average": 7.719,
      "vote_count": 628
  },
  {
      "adult": false,
      "backdrop_path": "/qBx97wytqlyPqXATHqRgIVFxJRU.jpg",
      "id": 436270,
      "title": "Black Adam",
      "original_language": "en",
      "original_title": "Black Adam",
      "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          14,
          878
      ],
      "popularity": 3052.448,
      "release_date": "2022-10-19",
      "video": false,
      "vote_average": 7.225,
      "vote_count": 3381
  },
  {
      "adult": false,
      "backdrop_path": "/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg",
      "id": 110316,
      "name": "Alice in Borderland",
      "original_language": "ja",
      "original_name": "今際の国のアリス",
      "overview": "With his two friends, a video-game-obsessed young man finds himself in a strange version of Tokyo where they must compete in dangerous games to win.",
      "poster_path": "/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg",
      "media_type": "tv",
      "genre_ids": [
          18,
          9648,
          10759,
          10765
      ],
      "popularity": 624.642,
      "first_air_date": "2020-12-10",
      "vote_average": 8.19,
      "vote_count": 1080,
      "origin_country": [
          "JP"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg",
      "id": 19995,
      "title": "Avatar",
      "original_language": "en",
      "original_title": "Avatar",
      "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          12,
          14,
          878
      ],
      "popularity": 2961.239,
      "release_date": "2009-12-15",
      "video": false,
      "vote_average": 7.552,
      "vote_count": 27366
  },
  {
      "adult": false,
      "backdrop_path": "/jG52tsazn04F1fe8hPZfVv7ICKt.jpg",
      "id": 668482,
      "title": "Roald Dahl's Matilda the Musical",
      "original_language": "en",
      "original_title": "Roald Dahl's Matilda the Musical",
      "overview": "An extraordinary young girl discovers her superpower and summons the remarkable courage, against all odds, to help others change their stories, whilst also taking charge of her own destiny. Standing up for what's right, she's met with miraculous results.",
      "poster_path": "/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg",
      "media_type": "movie",
      "genre_ids": [
          10751,
          35,
          14
      ],
      "popularity": 299.277,
      "release_date": "2022-11-25",
      "video": false,
      "vote_average": 6.942,
      "vote_count": 137
  },
  {
      "adult": false,
      "backdrop_path": "/2JeIqOdSM5nC1SQmuhUOfj3iB1U.jpg",
      "id": 555604,
      "title": "Guillermo del Toro's Pinocchio",
      "original_language": "en",
      "original_title": "Guillermo del Toro's Pinocchio",
      "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
      "media_type": "movie",
      "genre_ids": [
          16,
          14,
          18
      ],
      "popularity": 1679.347,
      "release_date": "2022-11-09",
      "video": false,
      "vote_average": 8.455,
      "vote_count": 1210
  },
  {
      "adult": false,
      "backdrop_path": "/9Md4CqzUGDtK5oEkRRvozLkGc9d.jpg",
      "id": 674324,
      "title": "The Banshees of Inisherin",
      "original_language": "en",
      "original_title": "The Banshees of Inisherin",
      "overview": "Two lifelong friends find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.",
      "poster_path": "/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg",
      "media_type": "movie",
      "genre_ids": [
          18,
          35
      ],
      "popularity": 311.277,
      "release_date": "2022-10-21",
      "video": false,
      "vote_average": 7.583,
      "vote_count": 276
  },
  {
      "adult": false,
      "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
      "id": 361743,
      "title": "Top Gun: Maverick",
      "original_language": "en",
      "original_title": "Top Gun: Maverick",
      "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          18
      ],
      "popularity": 755.399,
      "release_date": "2022-05-24",
      "video": false,
      "vote_average": 8.342,
      "vote_count": 5293
  },
  {
      "adult": false,
      "backdrop_path": "/6ovk8nrrSmN1ieT14zBAxcHbMU7.jpg",
      "id": 73375,
      "name": "Tom Clancy's Jack Ryan",
      "original_language": "en",
      "original_name": "Tom Clancy's Jack Ryan",
      "overview": "When CIA analyst Jack Ryan stumbles upon a suspicious series of bank transfers his search for answers pulls him from the safety of his desk job and catapults him into a deadly game of cat and mouse throughout Europe and the Middle East, with a rising terrorist figurehead preparing for a massive attack against the US and her allies.",
      "poster_path": "/z8yXhmNmc54TsMK2Ig4V4SHdkOX.jpg",
      "media_type": "tv",
      "genre_ids": [
          10759,
          18,
          10768
      ],
      "popularity": 226.251,
      "first_air_date": "2018-08-30",
      "vote_average": 7.7,
      "vote_count": 978,
      "origin_country": [
          "US"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/98bqsUBVjXpbUt1fRkjn7hJQXrq.jpg",
      "id": 157080,
      "name": "Treason",
      "original_language": "en",
      "original_name": "Treason",
      "overview": "An MI6 deputy's bright future takes a sharp turn after a reunion with a Russian spy forces him to question his entire life.",
      "poster_path": "/qOitarv5B5ydsScN3dkJPipYPg3.jpg",
      "media_type": "tv",
      "genre_ids": [
          18,
          10759
      ],
      "popularity": 148.492,
      "first_air_date": "2022-12-26",
      "vote_average": 6.797,
      "vote_count": 32,
      "origin_country": [
          "GB"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
      "id": 505642,
      "title": "Black Panther: Wakanda Forever",
      "original_language": "en",
      "original_title": "Black Panther: Wakanda Forever",
      "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      "media_type": "movie",
      "genre_ids": [
          28,
          12,
          878
      ],
      "popularity": 1355.565,
      "release_date": "2022-11-09",
      "video": false,
      "vote_average": 7.494,
      "vote_count": 1514
  },
  {
      "adult": false,
      "backdrop_path": "/atmII0hn3iQe3IWMBmIb3cc8EJZ.jpg",
      "id": 791177,
      "title": "Bones and All",
      "original_language": "en",
      "original_title": "Bones and All",
      "overview": "Abandoned by her father, a young woman embarks on a thousand-mile odyssey through the backroads of America where she meets a disenfranchised drifter. But despite their best efforts, all roads lead back to their terrifying pasts and to a final stand that will determine whether their love can survive their otherness.",
      "poster_path": "/gH6ppXl2gd1VMKoccKbLK69ZHQq.jpg",
      "media_type": "movie",
      "genre_ids": [
          10749,
          18,
          27
      ],
      "popularity": 315.042,
      "release_date": "2022-11-18",
      "video": false,
      "vote_average": 7.486,
      "vote_count": 433
  },
  {
      "adult": false,
      "backdrop_path": "/ypFD4TJ3nLJesou76V59CnweaT0.jpg",
      "id": 715931,
      "title": "Emancipation",
      "original_language": "en",
      "original_title": "Emancipation",
      "overview": "Inspired by the gripping true story of a man who would do anything for his family—and for freedom. When Peter, an enslaved man, risks his life to escape and return to his family, he embarks on a perilous journey of love and endurance.",
      "poster_path": "/s9sUK1vAaOcxJfKzNTszrNkPhkH.jpg",
      "media_type": "movie",
      "genre_ids": [
          36,
          18,
          53,
          28
      ],
      "popularity": 682.512,
      "release_date": "2022-12-02",
      "video": false,
      "vote_average": 8.165,
      "vote_count": 512
  },
  {
      "adult": false,
      "backdrop_path": "/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg",
      "id": 114410,
      "name": "Chainsaw Man",
      "original_language": "ja",
      "original_name": "チェンソーマン",
      "overview": "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
      "poster_path": "/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
      "media_type": "tv",
      "genre_ids": [
          16,
          10759,
          10765,
          35
      ],
      "popularity": 1373.178,
      "first_air_date": "2022-10-12",
      "vote_average": 8.7,
      "vote_count": 540,
      "origin_country": [
          "JP"
      ]
  },
  {
      "adult": false,
      "backdrop_path": "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
      "id": 804095,
      "title": "The Fabelmans",
      "original_language": "en",
      "original_title": "The Fabelmans",
      "overview": "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
      "poster_path": "/xId9zoiv5WPQOuxqykUDrlpmrUz.jpg",
      "media_type": "movie",
      "genre_ids": [
          18
      ],
      "popularity": 275.225,
      "release_date": "2022-11-11",
      "video": false,
      "vote_average": 8.002,
      "vote_count": 263
  }
]
export default MovieInfo;
