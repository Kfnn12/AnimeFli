const API_KEY = "713e451da1a44f2a161604db92a50296"
const BASE_URL = "https://api.themoviedb.org/3"

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `https://gogoanime.consumet.org/popular`,
  fetchRecents: 'https://gogoanime.consumet.org/recent-release',
  fetchMovies: 'https://gogoanime.consumet.org/anime-movies'
}
export default requests;