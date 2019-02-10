import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/14_portals/lesson';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();