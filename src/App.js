import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './css/App.css';
import { ConnectedTray as Tray } from './containers/Tray'
import { ConnectedNavbar as Navbar } from './containers/Navbar'
import { ConnectedEditor as Editor } from './containers/editor'
import { loadSongs } from './actions/SongActions'

class App extends Component {
    render() {
        return (
            <div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />    
                <Router>
                    <div className="App container">
                       <Route path='/' component={Navbar} />
                        <div className="col-md-3">
                            <Route path='/' component={Tray} />
                        </div>
                        <div className="col-md-9">
                            <Route exact path='/' render={ () => { return(<p>Select a song from the list or add a new song</p>)}} />
                            <Route path='/songs/:songId' component={Editor} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
    componentDidMount(){
        this.props.loadSongs();
    }
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({ 
        loadSongs: loadSongs,
    }, dispatch)
}
export const WrapperApp = connect(null,mapDispatchToProps)(App);