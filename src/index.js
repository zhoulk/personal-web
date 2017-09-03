import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/home/home';
import PostList from './components/post/postList'
import PageDetail from './components/post/pageDetail'

import registerServiceWorker from './registerServiceWorker';

import { Router, Route, browserHistory} from 'react-router'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/post" component={PostList}/>
        <Route path="/post/detail" component={PageDetail}/>
    </Router>, document.getElementById('root'));
registerServiceWorker();
