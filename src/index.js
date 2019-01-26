import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ButtonCounter from './apps/03_state/lesson';

ReactDOM.render(<ButtonCounter />, document.getElementById('root'));
registerServiceWorker();
