import React from 'react';
import { StyledContainer, StyledImage } from './styled';

const Card = ({ title, url, onClick }) => {
    return (
        <StyledContainer onClick={onClick}>
            <StyledImage src={url} alt={title} />
        </StyledContainer>
    );
}

export default Card;