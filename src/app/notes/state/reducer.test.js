import {
    ADD_NOTE_SUCCESS,
    DELETE_NOTE_SUCCESS,
    UPDATE_NOTE_SUCCESS,
    TOGGLE_THEME,
} from './actions';
import reducer from './reducer';

const defaultState = {
    notes: {
        1: { id: 1, text: 'text 1' },
        2: { id: 2, text: 'text 2' },
    },
    isDarkTheme: false,
}

it('should handle ADD_NOTE_SUCCESS', () => {
    const action = {
        type: ADD_NOTE_SUCCESS,
        note: {
            id: 5,
            text: 'text contents',
        },
    };

    const expectedState = {
        ...defaultState,
        notes: {
            ...defaultState.notes,
            5: { id: 5, text: 'text contents' }
        }
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
});

it('should handle DELETE_NOTE_SUCCESS', () => {
    const action = {
        type: DELETE_NOTE_SUCCESS,
        id: 2,
    }

    const notes = { ...defaultState.notes };
    delete notes[2];

    const expectedState = {
        ...defaultState,
        notes
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
});

it('should handle UPDATE_NOTE_SUCCESS', () => {
    const changedNote = {
        id: 1,
        text: 'changed text',
    };

    const action = {
        type: UPDATE_NOTE_SUCCESS,
        note: changedNote,
    };

    const expectedState = {
        ...defaultState,
        notes: {
            ...defaultState.notes,
            1: changedNote,
        }
    }

    expect(reducer(defaultState, action)).toEqual(expectedState);
});

it('should handle TOGGLE_THEME', () => {
    const action = {
        type: TOGGLE_THEME,
    };

    const expectedState = {
        ...defaultState,
        isDarkTheme: !defaultState.isDarkTheme,
    }

    expect(reducer(defaultState, action)).toEqual(expectedState);
});
