import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application'
import * as proxy from './state/proxy';
import './index.css';

ReactDOM.render(<Application />, document.getElementById('app'));

proxy.register();