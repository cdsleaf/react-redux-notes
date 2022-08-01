import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
    ${(props) => `background: ${ props.theme.noteBackground };`}
    ${(props) => `border: ${ props.theme.noteBorder };`}
    ${(props) => `color: ${ props.theme.pageText };`}
    ${(props) => `margin-bottom: ${ props.theme.space[3] }px;`}
    ${(props) => `padding: ${ props.theme.space[3] }px 0;`}
    ${(props) => `font-size: ${ props.theme.fontSizes.gamma }px;`}
    ${(props) => `border-bottom: ${ props.theme.noteBorderStyle };`}
    cursor: pointer;
    &:hover {
        ${(props) => `background: ${ props.theme.noteHoverBackground };`}
    }
`;

const StyledNote = (props) => {
    return (
        <Note>
            {props.note.text}
        </Note>
    );
};

export default StyledNote;
