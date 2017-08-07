import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedLogin as Login } from './Login';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/SessionActions'

export class Home extends Component {
    
    componentDidMount() {
        
    }
    render() {
        const {username} = this.props.currentUser;
        
        const disp = username ? (<p>Logged in as {username} <button onClick={this.props.logout}>Log Out</button></p>) : (<Login />)
        return (
        <div>
                {disp}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logout: logout
    }, dispatch)
}
export const ConnectedHome = connect(mapStateToProps,mapDispatchToProps)(Home)