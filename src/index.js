import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './apps/15_context/lesson';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();