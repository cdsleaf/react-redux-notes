import React from 'react';
import { Provider } from 'react-redux';
import NotesContainer from './notes/components/NotesContainer';
import DarkThemeProvider from './notes/components/DarkThemeProvider';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <DarkThemeProvider>
                <NotesContainer />
            </DarkThemeProvider>
        </Provider>
    );
}

export default App;
