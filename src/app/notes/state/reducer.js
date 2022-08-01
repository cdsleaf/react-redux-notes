import {
    LOAD_NOTES,
    LOAD_NOTES_SUCCESS,
    ADD_NOTE_SUCCESS,
    DELETE_NOTE_SUCCESS,
    TOGGLE_THEME,
} from './actions';

const initialState = {
    notes: {},
    isDarkTheme: false,
}

export default function reducer(state = initialState, action) {
    console.log(action);
    switch(action.type){
        case LOAD_NOTES:
            return state;
        case LOAD_NOTES_SUCCESS:
            return {
                ...state,
                notes: action.notes
            };
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [action.note.id]: action.note
                },
            }
        case DELETE_NOTE_SUCCESS:
            const notes = { ...state.notes };
            delete notes[action.id];
            return {
                ...state,
                notes,
            }
        case TOGGLE_THEME:
            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            }
        default:
            return state;
        }
}
