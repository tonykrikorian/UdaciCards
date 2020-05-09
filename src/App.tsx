import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import Main from './views/Main';
import { PersistGate } from 'redux-persist/integration/react';

export default function App()
{
    return (
        <Provider store={ store }>
            <PersistGate loading={ null } persistor={ persistor }>
                <Main />
            </PersistGate>
        </Provider>
    );
}
