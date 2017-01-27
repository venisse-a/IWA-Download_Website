import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import Header from './header';
import {Ser_Select} from '../action/ser_select.js';
class Category_Serie extends Component {

    getCatSeries(){
        var catMovies = [];
        for (var i=0;  i < this.props.series.length;i++) {
            if (this.props.series[i].genre.indexOf(this.props.active_serie_category.name) > -1) {
                catMovies.push(this.props.series[i]);
            }
        }
        catMovies.sort(function(ser1, ser2) {
            if(ser1.title < ser2.title) return -1;
            if(ser1.title > ser2.title) return 1;
            return 0;});
        return catSeries.map((serie) => {
            return(
                <li key={serie.id} onClick={() => this.props.Ser_Select(serie)}>
                    <Link to="/serie">{serie.title}</Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Category : {this.props.active_serie_category.name}</h2>
                <div>{this.getCatSeries()}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        active_serie_category: state.active_serie_category,
        series: state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Ser_Select: Ser_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category_Serie);