import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useDebounce } from '../hooks/useDebounce';

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
    input {
        width: calc(100% - 100px);
        border: none;
        background: transparent;

        &:focus {
            background: white;
        }
    }
`;

const StyledNote = ({ note, deleteNote, updateNote }) => {
    const [text, setText] = useState(note.text);
    const [, setValues] = useDebounce(updateNote, 1000);    

    const handleTextChange = ({ target }) => {
        const text = target.value;
        setText(text);
        setValues({ ...note, text });
    }

    return (
        <Note>
            <input value={text} onChange={handleTextChange} />
            <Button onClick={() => deleteNote(note.id)}>Delete</Button>
        </Note>
    );
};

export default StyledNote;
