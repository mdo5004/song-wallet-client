import React, { Component } from 'react';
import { connect } from 'react-redux';



export class Home extends Component {

    render() {
        return (<p>Logged in as currentUser</p>)
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}
export const ConnectedHome = connect(mapStateToProps,null)(Home)