import React from 'react';
import ReactDOM from 'react-dom';
import App from './apps/17_router/containers/lesson';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './apps/17_router/components/home';
import Posts from './apps/17_router/components/posts';
import Post from './apps/17_router/components/post';
import Contacts from './apps/17_router/components/contacts';
import Error from './apps/17_router/components/error';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/:id' component={Post} />
        <Route path='/contacts' component={Contacts} />
        <Route path='*' component={Error} />        
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();