import React from 'react';
import styled from 'styled-components';

const ThemeToggle = styled.button`
    border: 0;
    border-radius: 50%;
    font-size: 20px;
    background-color: 'white';
    cursor: pointer;
`;

const StyledThemeToggle = ({ isDarkTheme, toggleTheme }) => {
    return (
        <ThemeToggle onClick={toggleTheme}>
            {isDarkTheme ? '🌚': '🌝'}
        </ThemeToggle>
    );
};

export default StyledThemeToggle;
