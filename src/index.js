import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/08_listKeys/lesson';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();