import {
    ADD_NOTE_SUCCESS,
} from './actions';
import reducer from './reducer';

it('should handle ADD_NOTE_SUCCESS', () => {
    const defaultState = {
        notes: {
            1: { id: 1, text: 'text 1' },
            2: { id: 2, text: 'text 2' },
        }
    }
    const action = {
        type: ADD_NOTE_SUCCESS,
        note: {
            id: 5,
            text: 'text contents',
        },
    };

    const expectedState = {
        notes: {
            ...defaultState.notes,
            5: { id: 5, text: 'text contents' }
        }
    };

    expect(reducer(defaultState, action)).toEqual(expectedState);
});
