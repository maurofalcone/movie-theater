import React, { useCallback, useEffect, useState } from 'react';
import css from './Landing.module.css';
import MoviesList from '../movies-list';
import SearchBar from '../../../shared/search-bar';
import axios from 'axios';
import { API_KEY, BASE_URL, SEARCH_MOVIE_URL, SUCCESS_REQUEST_STATUS } from '../../../helpers/contants';
import RatingIcon from '../../../shared/rating-icon/';
import { mapMovies } from '../../../helpers/mapMovies';
import { sortBy } from '../../../helpers/sortBy';
import MessageOverlay from '../../../shared/message-overlay';

const allMoviesUrl = BASE_URL + API_KEY;
const stars = [1, 2, 3, 4, 5];

const Landing = () => {
    const [list, setList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(undefined);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetchMovies(allMoviesUrl);
    }, []);

    const handleClick = useCallback(() => {
        resetFilter();
        const url = !!searchText ? `${SEARCH_MOVIE_URL}${API_KEY}&query=${searchText}` : allMoviesUrl;
        fetchMovies(url);
    }, [searchText]);

    const resetFilter = () => {
        setRating(0);
        setFilteredMovies(undefined);
    }

    const onMouseEnter = (index) => {
        setHoverRating(index);
    };

    const onMouseLeave = () => {
        setHoverRating(0);
    };

    const onSaveRating = (index) => {
        const newRating = index === rating ? 0 : index;
        setRating(newRating);
        const selectedRating = (newRating * 2);
        if (!selectedRating) {
            setFilteredMovies(list);
        } else {
            const movies = list.filter((m) =>
                m.vote_average >= (selectedRating - 2) && m.vote_average <= selectedRating);
            setFilteredMovies(movies);
        }
    };

    const fetchMovies = async (url) => {
        try {
            setIsFetching(true);
            const response = await axios.get(url);
            if (response.status === SUCCESS_REQUEST_STATUS) {
                const sortedMovies = sortBy(response.data.results, 'popularity');
                const mappedMovies = mapMovies(sortedMovies);
                setErrorMsg('');
                setIsFetching(false);
                setList(mappedMovies);
            } else {
                setErrorMsg("Something went wrong. Please realod the page...");
            }
        } catch (ex) {
            setErrorMsg("Something went wrong. Please realod the page...");
        }
    }

    const handleChange = useCallback((evt) => {
        const value = evt.target.value;
        setSearchText(value);
    }, []);

    return (
        <div className={css.container}>
            <div className={css.filtersContainer}>
                <div className={css.searchContainer}>
                    <SearchBar
                        placeholder="Search a movie..."
                        onChange={handleChange}
                        onClick={handleClick}
                    />
                </div>
                <div className={css.starsContainer}>
                    <span>Filter By Rating:</span>
                    <div>
                        {
                            stars.map(index =>
                                <RatingIcon
                                    key={index}
                                    index={index}
                                    rating={rating}
                                    hoverRating={hoverRating}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                    onSaveRating={onSaveRating}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className={css.content}>
                {
                    isFetching || !!errorMsg
                        ? <MessageOverlay>{!!errorMsg ? errorMsg : "Loading..."}</MessageOverlay>
                        : <MoviesList data={!filteredMovies ? list : filteredMovies} />
                }
            </div>
        </div>
    )
}

export default Landing;
