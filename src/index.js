import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Router, Route, hashHistory} from 'react-router';
import Home from './components/home';
import Category from './components/category';
import Movie from './components/movie';
import Login from './components/login';
import Movies from './components/movies';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/movie" component={Movie} />
            <Route path="/login" component={Login} />
            <Route path="/movies" component={Movies} />
        </Router>
    </Provider>
    , document.getElementById('root'));
