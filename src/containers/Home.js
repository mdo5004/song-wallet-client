import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedLogin as Login } from './Login';


export class Home extends Component {

    render() {
        const currentUser = !!this.props.currentUser;
        const disp = currentUser ? (<p>Logged in as {this.props.currentUser.username}</p>) : (<Login />)
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
export const ConnectedHome = connect(mapStateToProps,null)(Home)