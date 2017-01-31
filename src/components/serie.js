import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid,Button,Segment} from 'semantic-ui-react'
import ReactPlayer from 'react-player';
import Header from './header';

class Serie extends Component {

    render() {
        return (
            <div>
                <Header />
                <Grid columns={2}>
                    <Grid.Column width={6}>
                        <td rowSpan="7" colSpan="2"><img src={this.props.activeSerie.cover} style={{width: 400, height: 600}}/></td>
                    </Grid.Column>
                    <Grid.Column>
                        <h2>{this.props.activeSerie.title}</h2>
                        <h4>Director : {this.props.activeSerie.director}</h4>
                        <h4>Actors : {this.props.activeSerie.actors}</h4>
                        <h4>Genre : {this.props.activeSerie.genre}</h4>
                        <h4>Release Date : {this.props.activeSerie.release_date}</h4>
                        <Segment>
                            <h5>Synopsis</h5>
                            <div>{this.props.activeSerie.synopsis}</div>
                        </Segment>
                        <div></div>
                        <Button content='Download' icon='download' color='green' labelPosition='left' />
                    </Grid.Column>
                </Grid>
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