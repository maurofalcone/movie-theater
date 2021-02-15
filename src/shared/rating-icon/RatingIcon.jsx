import React, { useMemo } from 'react';
import StarIcon from '../star-icon';
import { StyledContainer } from './styled';

const RatingIcon = ({
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
}) => {
    const fill = useMemo(() => {
        if (hoverRating >= index) {
            return 'yellow';
        } else if (!hoverRating && rating >= index) {
            return 'yellow';
        }
        return 'none';
    }, [rating, hoverRating, index]);
    return (
        <StyledContainer
            className="cursor-pointer"
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onSaveRating(index)}>
            <StarIcon fill={fill} />
        </StyledContainer>
    )
}

export default RatingIcon;