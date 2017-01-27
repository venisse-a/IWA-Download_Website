import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from './header';

class Serie extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>
                    <h2>{this.props.activeSerie.title}</h2>
                    <table>
                        <tbody>
                        <div>
                            <tr>
                                <td>Director : {this.props.activeSerie.director}</td>
                            </tr>
                            <tr>
                                <td>Actors : {this.props.activeSerie.actors}</td>
                            </tr>
                            <tr>
                                <td>Genre : {this.props.activeSerie.genre}</td>
                            </tr>
                            <tr>
                                <td>Release Date : {this.props.activeSerie.release_date}</td>
                            </tr>
                        </div>
                        <tr>
                            <td rowSpan="7" colSpan="2"><img src={this.props.activeSerie.cover} style={{width: 400, height: 600}}/></td>
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
        activeSerie: state.activeSerie
    }
}

export default connect(mapStateToProps)(Serie);