import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './reset.css';
import { BrowserRouter } from 'react-router-dom';
import router from './router'

ReactDOM.render(

<BrowserRouter>
    {router}
</BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
