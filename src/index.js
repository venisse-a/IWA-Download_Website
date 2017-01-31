import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Router, Route, hashHistory} from 'react-router';
import Home from './components/home';
import Category_Movie from './components/category';
import Movie from './components/movie';
import Login from './components/login';
import Movies from './components/movies';
import Series from './components/series';
import Serie from './components/serie';
import Category_Serie from './components/category'
import Home_Movies from './components/home_movies'
import Home_Series from './components/home_series'


const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/category_mov" component={Category_Movie} />
            <Route path="/movie" component={Movie} />
            <Route path="/login" component={Login} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series}/>
            <Route path="/serie" component={Serie}/>
            <Route path="/category_ser" component={Category_Serie}/>
            <route path="/homemovies" component={Home_Movies}/>
            <route path="/homeseries" component={Home_Series}/>
        </Router>
    </Provider>
    , document.getElementById('root'));