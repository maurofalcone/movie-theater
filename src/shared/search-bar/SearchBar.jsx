import React, { useEffect } from 'react';
import Button from '../button';
import { StyledContainer, StyledInput } from './styled';

const SearchBar = ({ onChange, onClick, placeholder }) => {
    useEffect(() => {
        window.addEventListener('keydown', handleEnter);

        return () => window.removeEventListener('keydown', handleEnter);
    });

    const handleEnter = (evt) => {
        if (evt.keyCode === 13) {
            onClick();
        }
    }

    return (
        <StyledContainer>
            <StyledInput placeholder={placeholder} onChange={onChange} />
            <Button onClick={onClick} type="primary" variant="none">
                Search
            </Button>
        </StyledContainer>
    )
}

export default SearchBar;