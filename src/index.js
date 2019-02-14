import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/16_work_api/containers/lesson';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();