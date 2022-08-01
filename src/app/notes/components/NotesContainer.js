import { connect } from 'react-redux';
import Notes from './Notes';
import { loadNotes, addNote, deleteNote, toggleTheme }  from '../state';

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes,
        isDarkTheme: state.isDarkTheme,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadNotes: () => {
            dispatch(loadNotes());
        },
        addNote: (content) => {
            dispatch(addNote(content));
        },
        deleteNote: (id) => {
            dispatch(deleteNote(id));
        },
        toggleTheme: () => {
            dispatch(toggleTheme());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
