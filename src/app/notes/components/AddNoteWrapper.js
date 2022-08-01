import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const AddNoteWrapper = styled.div`
    display: flex;
    align-items: center;
    background: rgba(0,0,0,0.05);
    padding: 8px 16px;
    border-radius: 5px;
    label {
        color: ${(props) => props.theme.label};
    }
    input {
        background: ${(props) => props.theme.textFieldBackground};
        border: ${(props) => props.theme.textFieldBorderStyle};
        padding: 8px;
        margin: 0 16px;
        &:focus {
            background: ${(props) => props.theme.textFieldFocusBackground};
        }
    }
`;

const StyledAddNoteWrapper = (props) => {
    const [content, setContent] = useState('');

    return (
        <AddNoteWrapper>
            <label>Add another:</label>
            <input type="text" placeholder="text for new note" value={content} onChange={({ target }) => setContent(target.value)}/>
            <Button>Add</Button>
        </AddNoteWrapper>
    );
};

export default StyledAddNoteWrapper;
