import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, onClick, type, variant }) => {
    return (
        <StyledButton onClick={onClick} type={type} variant={variant}>
            {children}
        </StyledButton>
    )
}

export default Button;
