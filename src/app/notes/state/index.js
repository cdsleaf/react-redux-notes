import { loadNotes, addNote, deleteNote, toggleTheme } from './actions';
import reducer from './reducer';
import epic from './epic';

export { reducer, epic, loadNotes, addNote, deleteNote, toggleTheme };
