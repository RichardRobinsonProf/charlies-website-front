import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import WhatsappButton from './components/Base/WhatsappButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <WhatsappButton />
        </BrowserRouter>
    </Provider>
);



