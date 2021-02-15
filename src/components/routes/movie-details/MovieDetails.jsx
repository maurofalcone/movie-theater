import React, { useEffect, useState } from 'react';
import Card from '../../../shared/card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, IMAGES_URL, MOVIE_DETAILS_URL, SUCCESS_REQUEST_STATUS } from '../../../helpers/contants';
import css from './MovieDetails.module.css';
import MessageOverlay from '../../../shared/message-overlay';
import { mapGenres } from '../../../helpers/mapGenres';

const displayDetails = (movie) => {
    return (
        <div className={css.detailsContainer}>
            <ul>
                <li>{`Title: ${movie.title}`}</li>
                <li>{`Genres: ${mapGenres(movie.genres)}`}</li>
                <li>{`Language: ${movie.original_language.toUpperCase()}`}</li>
                <li>{`Release Date: ${movie.release_date}`}</li>
                <li>{`Overview: ${movie.overview}`}</li>
            </ul>
        </div>
    );
}

const MovieDetails = () => {
    let { id } = useParams();
    const [movie, setMovie] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    const getMovieDetails = async () => {
        try {
            const response = await axios.get(MOVIE_DETAILS_URL + id + API_KEY);
            if (response.status === SUCCESS_REQUEST_STATUS) {
                setMovie(response.data);
                setIsLoading(false);
                setErrorMsg('');
            } else {
                setErrorMsg("Something went wrong. Please realod the page...");
            }
        } catch (ex) {
            setErrorMsg("Something went wrong. Please realod the page...");
        }
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    if (isLoading || !!errorMsg) {
        return <MessageOverlay>{!!errorMsg ? errorMsg : "Loading..."}</MessageOverlay>
    }

    if (movie) {
        return (
            <div className={css.container}>
                <Card url={IMAGES_URL + movie.poster_path} />
                {displayDetails(movie)}
            </div>
        )
    }
    return null;
}

export default MovieDetails;
