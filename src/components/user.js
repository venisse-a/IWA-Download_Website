import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from './header';

class User extends Component {

    render() {

        <div>
            <Header/>
            <div>
                You're logged in!
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

connect(mapStateToProps)(User);

