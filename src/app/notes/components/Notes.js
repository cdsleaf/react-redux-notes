import React, { useEffect } from 'react';
import Note from './Note';
import Title from './Title';
import AddNoteWrapper from './AddNoteWrapper';
import styled from 'styled-components';

const Notes = styled.div`
    ${(props) => `background: ${ props.theme.pageBackground };`}
    min-height: 100%;
    padding: 20px;
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #themeToggle {
        border: 0;
        padding: 8px 16px;
        font-size: 12px;
    }
`;

const StyledNotes = (props) => {
    useEffect(() => {
        props.loadNotes();
    }, []);

    return (
        <Notes>
            <header>
                <Title>Notes</Title>
                <button id="themeToggle">Toggle theme</button>
            </header>
            <AddNoteWrapper />
            {
                Object.values(props.notes).map((note, i) => {
                    return (
                        <Note
                          key={i}
                          note={note}
                        />
                    );
                })
            }
        </Notes>
    );
};

export default StyledNotes;
