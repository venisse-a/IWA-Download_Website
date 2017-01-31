import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {Menu,Input,Card,Image} from 'semantic-ui-react';
import {Ser_Select} from '../action/ser_select';

class Home_Series extends Component{

    constructor() {
        super();
        this.state = {
            query: '',
            queryFilter : 'title',
            queryPlaceholder : 'Search...'
        }
    }

    all_series(){
        var radioFilter = this.state.queryFilter;
        var filteredSeries = this.props.series.filter(
            (serie) => {
                if (radioFilter == 'title') {
                    return serie.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
                } else if (radioFilter == 'releaseDate') {
                    return serie.release_date.toString().startsWith(this.state.query);
                } else if (radioFilter == 'uploadDate') {
                    return serie.upload_date.toString().startsWith(this.state.query);
                }
            }
        );
        var alphaOrder = [];
        for (var i=0;  i < filteredSeries.length;i++) {
            alphaOrder.push(filteredSeries[i]);
        }
        alphaOrder.sort(function(mov1, mov2) {
            if(mov1.title < mov2.title) return -1;
            if(mov1.title > mov2.title) return 1;
            return 0;});
        return alphaOrder.map((serie) => {
            return(
                <Card key={serie.id} onClick={() => this.props.Ser_Select(serie)}>
                    <Image src={serie.cover} size="small"/>
                    <Card.Content>
                        <Card.Header>{<Link to="/serie">{serie.title}</Link>}</Card.Header>
                        <Card.Meta>{serie.release_date}</Card.Meta>
                    </Card.Content>
                </Card>
            );
        });
    }

    updateQuery(event) {
        this.setState({query : event.target.value});
    }

    updateQueryFilter(event) {
        this.setState({queryFilter : event.target.value});
        if (event.target.value == 'title') {
            this.setState({queryPlaceholder : "Search..."});
        } else if (event.target.value == 'releaseDate') {
            this.setState({queryPlaceholder : "YYYY"});
        } else if (event.target.value == 'uploadDate') {
            this.setState({queryPlaceholder : "YYYY"});
        }
    }

    render() {
        return(
            <div>
                <Header/>
                <Input type="text" value={this.state.query} onChange={this.updateQuery.bind(this)} placeholder={this.state.queryPlaceholder}/>
                <Input type="radio" name="filterSelector" value="title" onClick={this.updateQueryFilter.bind(this)} /> Title
                <Input type="radio" name="filterSelector" value="releaseDate" onClick={this.updateQueryFilter.bind(this)} /> Release Date
                <Input type="radio" name="filterSelector" value="uploadDate" onClick={this.updateQueryFilter.bind(this)} /> Upload Date
                <Card.Group itemsPerRow={8}>{this.all_series()}</Card.Group>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        series:state.series
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({Ser_Select: Ser_Select}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home_Series);