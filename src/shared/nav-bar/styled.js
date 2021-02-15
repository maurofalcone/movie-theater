import styled from 'styled-components';

export const StyledContainer = styled.div`
    background-color: var(--black);
    display: flex;
    justify-content: center;
    height: 60px;
    width: 100%;

    & .childrenContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1570px;
    }

    & .logoContainer {
        display: flex;
        align-items: center;
        height: 100%;
    }

    & .logoContainer img {
        height: 50px;
    }

    & .buttonsContainer {
        width: 180px;
        display: flex;
        justify-content: space-around;
    }
`;