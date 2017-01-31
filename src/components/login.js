import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form,Button,Grid,Input} from 'semantic-ui-react';
import Header from './header';

class Login extends Component {

    login(){
        var username = document.getElementsByName("username").value;
        var password = document.getElementsByName("password").value;
        console.log(username);
        for (var i=0;  i < this.props.users.length;i++) {
            if (this.props.users[i].username == username && this.props.users[i].password == password) {
                this.transitionTo('/user');
            }
            else{
                this.transitionTo('/login');
            }
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <Grid columns={1} centered>
                    <Grid.Row/>
                    <Form>
                        <Form.Field>
                            <Input name='username' placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <Input name="password" placeholder='Password' />
                        </Form.Field>
                        <Button type='submit' onClick={this.login}>Sign In</Button>
                    </Form>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login);