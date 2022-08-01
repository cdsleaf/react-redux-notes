import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Note = styled.div`
    ${(props) => `background: ${ props.theme.noteBackground };`}
    ${(props) => `border: ${ props.theme.noteBorder };`}
    ${(props) => `color: ${ props.theme.pageText };`}
    ${(props) => `margin-bottom: ${ props.theme.space[3] }px;`}
    ${(props) => `padding: ${ props.theme.space[3] }px 0;`}
    ${(props) => `font-size: ${ props.theme.fontSizes.gamma }px;`}
    ${(props) => `border-bottom: ${ props.theme.noteBorderStyle };`}
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
        ${(props) => `background: ${ props.theme.noteHoverBackground };`}
    }
`;

const StyledNote = ({ note, deleteNote }) => {
    return (
        <Note>
            {note.text}
            <Button onClick={() => deleteNote(note.id)}>Delete</Button>
        </Note>
    );
};

export default StyledNote;
