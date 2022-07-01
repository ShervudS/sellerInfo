import React from 'react';
import { Provider } from 'react-redux';
import { store } from '_redux/store';
// import { ThemeProvider } from '_components/Theme/ThemeProvider';
import { Dashboard } from '_components/Dashboard';
import '_styles/main.scss';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            {/*<ThemeProvider>*/}
            <Dashboard />
            {/*</ThemeProvider>*/}
        </Provider>
    );
};
