import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ServiceWorker from './state/proxy';
import Application from './components/Application';

import './index.module.css';

ReactDOM.render(
    <Application />, 
    document.getElementById('root') as HTMLElement
);

ServiceWorker.register();