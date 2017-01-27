import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Header from './header';
import {Mov_Select} from '../action/mov_select.js';

class Category_Movie extends Component {

    getCatMovies(){
        var catMovies = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            if (this.props.movies[i].genre.indexOf(this.props.active_movie_category.name) > -1) {
                catMovies.push(this.props.movies[i]);
            }
        }
        catMovies.sort(function(mov1, mov2) {
            if(mov1.title < mov2.title) return -1;
            if(mov1.title > mov2.title) return 1;
            return 0;});
        return catMovies.map((movie) => {
            return(
                <li key={movie.id} onClick={() => this.props.Mov_Select(movie)}>
                    <Link to="/movie">{movie.title}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Category : {this.props.active_movie_category.name}</h2>
                <div>{this.getCatMovies()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        active_movie_category: state.active_movie_category,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Mov_Select: Mov_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category_Movie);
