import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './header';

class Login extends Component {

    render() {
        return (

            <div>
                Login
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Login);