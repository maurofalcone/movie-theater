import { IMAGES_URL } from "./contants";

export const mapMovies = (list) => {
    return list.map(movie => {
        const imagePath = movie.poster_path || movie.backdrop_path;
        const imageURL = IMAGES_URL + imagePath;
        return {
            ...movie,
            imageURL,
        }
    })
}
