import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Button,Segment} from 'semantic-ui-react'

class Header extends Component{

    render() {
        return(
            <Segment inverted>
                <Link to="/">
                    <Button basic inverted color='red' className="button">Home</Button>
                </Link>
                <Link to="/homemovies">
                    <Button basic inverted color='red' className="button">Movies</Button>
                </Link>
                <Link to="/homeseries">
                    <Button basic inverted color='red' className="button">Series</Button>
                </Link>
                <Link to="/login">
                    <Button color='green' className="button">Sign In</Button>
                </Link>
            </Segment>
        );
    }
}

export default connect()(Header);