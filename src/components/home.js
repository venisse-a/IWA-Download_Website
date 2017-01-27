import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {Cat_Select} from '../action/cat_select';
import {Mov_Select} from '../action/mov_select';

class Home extends Component{

    categories() {
        return this.props.categories.map((category) => {
            return(
                <li key={category.name} onClick={() => this.props.Cat_Select(category)}>
                    <Link to="/category_mov">{category.name}</Link>
                </li>
            );
        });
    }

    last_release() {
        var ordered = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            ordered.push(this.props.movies[i]);
        }
        ordered.sort(function(mov1, mov2) {return mov1.upload_date - mov2.upload_date});
        var last_movies = ordered.slice(0,10);
        return last_movies.map((movie) => {
            return(
                <li key={movie.id} onClick={() => this.props.Mov_Select(movie)}>
                    <Link to="/movie">{movie.title}</Link>
                </li>
            );
        });
    }

    render() {
        return(
            <div>
                <Header />
                <h2>Categories</h2>
                <div>{this.categories()}</div>
                <h2>Last Release</h2>
                <div>{this.last_release()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Cat_Select: Cat_Select, Mov_Select: Mov_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);