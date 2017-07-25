import React from 'react';
import { login } from '../actions/SessionActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Login extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }
    }
    updateEmail = (event) => {
        this.setState({
            email:event.target.value
        })
    }
    updatePassword = (event) => {
        this.setState({
            password:event.target.value
        })
    }
    login = (event) => {
        event.preventDefault();
        this.props.login(this.state)
    }
    render() {
        return (
            <form onSubmit={this.login}>
                <label>email</label>
                <input value={this.state.email} onChange={this.updateEmail}></input>
                <label>password</label>
                <input type='password' value={this.state.password} onChange={this.updatePassword}></input>
                <button type="submit">Login</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login: login
    }, dispatch)
}

export const ConnectedLogin = connect(null, mapDispatchToProps)(Login);