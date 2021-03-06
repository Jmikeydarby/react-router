import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import PageNotFound from './components/PageNotFound';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={ AppContainer }>
      <IndexRedirect to='/albums' />
      <Route path='/albums' component={ Albums }/>
      <Route path='/album/:albumId' component={ Album }/>
      <Route path='/artists' component={ Artists }/>
      <Route path='/artist/:artistId' component={ Artist }>
        <Route path='albums' component={ Albums }/>
        <Route path='songs' component={ Songs }/>
      </Route>
      <Route path='*' component={ PageNotFound } />
    </Route>
  </Router>,
  document.getElementById('app')
);
