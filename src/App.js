import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './css/App.css';
import { ConnectedMenu as Menu } from './containers/menu'
import { Editor } from './containers/editor'
import { loadSongs } from './actions/SongActions'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route path='/' component={Menu} />
                     <Route path='/song/:id' component={Editor} />

                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({ 
        loadSongs: loadSongs,
    }, dispatch)
}
export const WrapperApp = connect(null,mapDispatchToProps)(App);