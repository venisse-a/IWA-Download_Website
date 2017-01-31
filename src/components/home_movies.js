import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from './header';
import {Menu,Input,Card,Image,Container} from 'semantic-ui-react';
import {Cat_Select} from '../action/cat_select';
import {Mov_Select} from '../action/mov_select';

class Home_Movies extends Component{

    constructor() {
        super();
        this.state = {
            query: '',
            queryFilter : 'title',
            queryPlaceholder : 'Search...'
        }
    }

    all_movies(){
        var radioFilter = this.state.queryFilter;
        var filteredMovies = this.props.movies.filter(
            (movie) => {
                if (radioFilter == 'title') {
                    return movie.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
                } else if (radioFilter == 'releaseDate') {
                    return movie.release_date.toString().startsWith(this.state.query);
                } else if (radioFilter == 'uploadDate') {
                    return movie.upload_date.toString().startsWith(this.state.query);
                }
            }
        );
        var alphaOrder = [];
        for (var i=0;  i < filteredMovies.length;i++) {
            alphaOrder.push(filteredMovies[i]);
        }
        alphaOrder.sort(function(mov1, mov2) {
            if(mov1.title < mov2.title) return -1;
            if(mov1.title > mov2.title) return 1;
            return 0;});
        return alphaOrder.map((movie) => {
            return(
            <Card key={movie.id} onClick={() => this.props.Mov_Select(movie)}>
                <Image src={movie.cover} size="small"/>
                <Card.Content>
                    <Card.Header>{<Link to="/movie">{movie.title}</Link>}</Card.Header>
                    <Card.Meta>{movie.release_date}</Card.Meta>
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

    categories() {
        return this.props.categories.map((category) => {
            return(
                <Menu.Item key={category.name} onClick={() => this.props.Cat_Select(category)}>
                    <Link to="/category_mov">{category.name}</Link>
                </Menu.Item>
            );
        });
    }

    render() {
        return(
            <div>
                <Header />
                <Menu>{this.categories()}</Menu>
                <Input type="text" value={this.state.query} onChange={this.updateQuery.bind(this)} placeholder={this.state.queryPlaceholder}/>
                <Input type="radio" name="filterSelector" value="title" onClick={this.updateQueryFilter.bind(this)} /> Title
                <Input type="radio" name="filterSelector" value="releaseDate" onClick={this.updateQueryFilter.bind(this)} /> Release Date
                <Input type="radio" name="filterSelector" value="uploadDate" onClick={this.updateQueryFilter.bind(this)} /> Upload Date
                <Card.Group itemsPerRow={8}>{this.all_movies()}</Card.Group>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home_Movies);