import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {Cat_Ser_Select} from '../action/cat_select';
import {Ser_Select} from '../action/ser_select';

class Series extends Component{



    render() {
        return(
            <div>
                <Header />
                <input type="text" value={this.state.query} onChange={this.updateQuery.bind(this)} placeholder={this.state.queryPlaceholder}/>
                <input type="radio" name="filterSelector" value="title" onClick={this.updateQueryFilter.bind(this)} /> Title
                <input type="radio" name="filterSelector" value="releaseDate" onClick={this.updateQueryFilter.bind(this)} /> Release Date
                <input type="radio" name="filterSelector" value="uploadDate" onClick={this.updateQueryFilter.bind(this)} /> Upload Date
                <div>{this.all_series()}</div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        categories_serie: state.categories_serie,
        series: state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Cat_Ser_Select: Cat_Ser_Select, Ser_Select: Ser_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Series);