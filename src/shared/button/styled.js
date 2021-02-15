import styled from "styled-components";

const getBorderStyle = (props) => {
    if (props.variant === 'outlined') {
        const borderColor = props.type === 'secondary' ? 'var(--red)' : 'var(--white)';
        return `
            border-width: 1px;
            border-color: ${borderColor};
            border-radius: 3px;
        `;
    } return `
        border: none;
    `;
}

export const StyledButton = styled.button`
    background-color: ${(props) => props.type === 'secondary' ? 'var(--red)' : 'var(--white)'};
    color: ${(props) => props.type === 'secondary' ? 'var(--white)' : 'var(--red)'};
    ${(props) => getBorderStyle(props)};
    height: 30px;
    width: 80px;
    box-shadow: none;
    outline: none;
`;