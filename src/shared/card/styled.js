import styled from "styled-components";
import logo from '../../images/logo.png';

export const StyledContainer = styled.div`
    height: 450px;
    position: relative;
    width: 350px;

    &:hover {
        cursor: ${(props) => props.onClick !== undefined ? "pointer" : "default"};
    }
`;

export const StyledImage = styled.img`
    height: 100%;
    width: 100%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;
`;