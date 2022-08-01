import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 8px 16px;
    border:0;
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.buttonText};
    cursor: pointer;
`;

const StyledButton = ({ children, onClick }) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

export default StyledButton;
