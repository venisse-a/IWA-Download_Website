import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import { Grid, Menu, Segment } from 'semantic-ui-react'
import {Cat_Select} from '../action/cat_select';
import {Mov_Select} from '../action/mov_select';
import {Ser_Select} from '../action/ser_select';

class Home extends Component{


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
    last_series(){
        var ordered = [];
        for (var i=0;  i < this.props.series.length;i++) {
            ordered.push(this.props.series[i]);
        }
        ordered.sort(function(mov1, mov2) {return mov1.upload_date - mov2.upload_date});
        var last_series = ordered.slice(0,10);
        return last_series.map((serie) => {
            return(
                <li key={serie.id} onClick={() => this.props.Ser_Select(serie)}>
                    <Link to="/serie">{serie.title}</Link>
                </li>
            );
        });
    }

    render() {
        return(
            <div>
                <Header/>
                <Grid centered >
                    <div></div>
                    <h1>Welcome to DL IT, your new download website with the greatest movies and series</h1>
                    <div></div>
                </Grid>
                <Grid columns={2} centered>
                    <Grid.Column>
                        <h2>Last Movies</h2>
                        <div>{this.last_release()}</div>
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Last Series</h2>
                        <div>{this.last_series()}</div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        categories_serie: state.categories_serie,
        movies: state.movies,
        series:state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Cat_Select: Cat_Select, Mov_Select: Mov_Select,Ser_Select: Ser_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);