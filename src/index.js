import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import MainRoutes from './components/routes/MainRoutes';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const App = () => (
    <div>
        <MainRoutes />
    </div>
)

render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
