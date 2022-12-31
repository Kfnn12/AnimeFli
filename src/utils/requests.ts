const API_KEY = "713e451da1a44f2a161604db92a50296"
const BASE_URL = "https://api.themoviedb.org/3"

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `https://api.themoviedb.org/3/trending/all/week?api_key=713e451da1a44f2a161604db92a50296&language=en-US`,
  fetchRecents: 'https://gogoanime.consumet.org/recent-release'
}
export default requests;