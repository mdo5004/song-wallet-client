import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedLogin as Login } from './Login';


export class Home extends Component {

    render() {
        const currentUser = this.props.currentUser;
        const disp = !currentUser ? (<Login />) : (<p>Please log in</p>)
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