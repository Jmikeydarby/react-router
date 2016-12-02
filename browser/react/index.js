import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './containers/Albums';
import Album from './containers/Album';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ AppContainer }>
      <Route path='/albums' component={ Albums }/>
        <Route path='/album/:albumId' component={ Album }/>
    </Route>
  </Router>,
  document.getElementById('app')
);
