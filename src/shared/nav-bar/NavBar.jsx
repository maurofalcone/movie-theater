import React from 'react';
import Button from '../button';
import { StyledContainer } from './styled';
import logo from '../../images/logo.png';

const NavBar = ({ onClick }) => {
    return (
        <StyledContainer>
            <div className="childrenContainer">
                <div onClick={onClick} className="logoContainer">
                    <img src={logo} alt="Movie Theater" />
                </div>
                <div className="buttonsContainer">
                    <Button type="primary" variant="outlined">
                        Sign In
                    </Button>
                    <Button type="secondary" variant="outlined">
                        Sign Up
                    </Button>
                </div>
            </div>
        </StyledContainer>
    );
}

export default NavBar;