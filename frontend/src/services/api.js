const API_KEY = "6b573b759cc6e8c53949b507c7f54b81"
const BASE_URL = "https://api.themoviedb.org/3"

//https://api.themoviedb.org/3
//https://www.themoviedb.org/
// https://www.themoviedb.org/subscription

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
);
    const data = await response.json()
    return data.results
};