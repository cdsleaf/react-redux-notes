import { loadNotesRequest, addNoteRequest, deleteNoteRequest, updateNoteRequest } from './service';

const ns = 'notes/';
export const LOAD_NOTES = `${ns}LOAD_NOTES`;
export const LOAD_NOTES_SUCCESS = `${ns}LOAD_NOTES_SUCCESS`;
export const ADD_NOTE = `${ns}ADD_NOTE`;
export const ADD_NOTE_SUCCESS = `${ns}ADD_NOTE_SUCCESS`;
export const DELETE_NOTE = `${ns}DELETE_NOTE`;
export const DELETE_NOTE_SUCCESS = `${ns}DELETE_NOTE_SUCCESS`;
export const UPDATE_NOTE = `${ns}UPDATE_NOTE`;
export const UPDATE_NOTE_SUCCESS = `${ns}UPDATE_NOTE_SUCCESS`;
export const TOGGLE_THEME = 'TOGGLE_THEME';

export function toggleTheme() {
    return {
        type: TOGGLE_THEME,
    }
}

export function loadNotes() {
    return {
        type: LOAD_NOTES,
        noteOperation: {
            request: loadNotesRequest(),
            success: loadNotesSuccess
        }
    }
}

function loadNotesSuccess(notes) {
    return {
        type: LOAD_NOTES_SUCCESS,
        notes
    }
}

export function addNote(content) {
    return {
        type: ADD_NOTE,
        noteOperation: {
            request: addNoteRequest(content),
            success: addNoteSuccess,
        }
    };
}

function addNoteSuccess(note) {
    return {
        type: ADD_NOTE_SUCCESS,
        note,
    };
}

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        noteOperation: {
            request: deleteNoteRequest(id),
            success: () => deleteNoteSuccess(id),
        }
    }
}

function deleteNoteSuccess(id) {
    return {
        type: DELETE_NOTE_SUCCESS,
        id,
    }
}

export function updateNote(note) {
    return {
        type: UPDATE_NOTE,
        noteOperation: {
            request: updateNoteRequest(note),
            success: updateNoteSuccess,
        }
    }
}

function updateNoteSuccess(note) {
    return {
        type: UPDATE_NOTE_SUCCESS,
        note,
    }
}
