import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Header extends Component{

    render() {
        return(
            <table>
                <tbody>
                <tr>
                    <th>
                        <Link to="/">
                            <button className="button">Home</button>
                        </Link>
                    </th>
                    <th>
                        <Link to="/movies">
                            <button className="button">View All Movies</button>
                        </Link>
                    </th>
                    <th>
                        <Link to="/login">
                            <button className="button">Sign In</button>
                        </Link>
                    </th>
                    <th>
                        <Link to="/register">
                            <button className="button">Register</button>
                        </Link>
                    </th>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default connect()(Header);