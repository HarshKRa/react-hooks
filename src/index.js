import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import ContextProvider from './context/AppContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     // 2. Providing the context

    <ContextProvider>
         <App />
    </ContextProvider>
);


