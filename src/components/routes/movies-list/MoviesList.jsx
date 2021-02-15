import Card from '../../../shared/card';
import css from './MoviesList.module.css';
import { useHistory } from "react-router-dom";
import MessageOverlay from '../../../shared/message-overlay';

const MoviesList = ({ data }) => {

    let history = useHistory();

    const handleClick = (id) => {
        history.push(`/movie_details/${id}`);
    }

    if (!data.length) {
        return <MessageOverlay>No movies found.</MessageOverlay>
    }

    return data.map((movie) => {
        return (
            <div
                className={css.cardContainer}
                key={movie.id}
            >
                <Card
                    onClick={() => handleClick(movie.id)}
                    title={movie.title}
                    url={movie.imageURL}
                />
            </div>
        )
    })
}

export default MoviesList;
