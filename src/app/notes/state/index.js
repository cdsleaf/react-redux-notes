import { loadNotes, addNote, deleteNote, updateNote, toggleTheme } from './actions';
import reducer from './reducer';
import epic from './epic';

export { reducer, epic, loadNotes, addNote, deleteNote, updateNote, toggleTheme };
