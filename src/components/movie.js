import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from './header';

class Movie extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>
                <h2>{this.props.activeMovie.title}</h2>
                <table>
                    <tbody>
                        <div>
                            <tr>
                                <td>Director : {this.props.activeMovie.director}</td>
                            </tr>
                            <tr>
                                <td>Actors : {this.props.activeMovie.actors}</td>
                            </tr>
                            <tr>
                                <td>Genre : {this.props.activeMovie.genre}</td>
                            </tr>
                            <tr>
                                <td>Release Date : {this.props.activeMovie.release_date}</td>
                            </tr>
                        </div>
                    <tr>
                        <td rowSpan="7" colSpan="2"><img src={this.props.activeMovie.cover} style={{width: 400, height: 600}}/></td>
                    </tr>

                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeMovie: state.activeMovie
    }
}

export default connect(mapStateToProps)(Movie);