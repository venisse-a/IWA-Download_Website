import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid,Segment,Button,Message} from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import Header from './header';

class Movie extends Component {

    render() {
        return (
            <div>
                <Header />
                <Grid columns={2}>
                    <Grid.Column width={6}>
                        <td rowSpan="7" colSpan="2"><img src={this.props.activeMovie.cover} style={{width: 400, height: 600}}/></td>
                    </Grid.Column>
                    <Grid.Column>
                        <h2>{this.props.activeMovie.title}</h2>
                        <h4>Director : {this.props.activeMovie.director}</h4>
                        <h4>Actors : {this.props.activeMovie.actors}</h4>
                        <h4>Genre : {this.props.activeMovie.genre}</h4>
                        <h4>Release Date : {this.props.activeMovie.release_date}</h4>
                        <Segment>
                            <h5>Synopsis</h5>
                            <div>{this.props.activeMovie.synopsis}</div>
                        </Segment>
                        <div></div>
                        <Button content='Download' icon='download' color='green' labelPosition='left'/>
                    </Grid.Column>
                </Grid>
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