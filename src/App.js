import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import './css/App.css';
import { ConnectedHome as Home } from './containers/Home';
import { NavigationBar } from './components/navbar';
import { Songs } from './containers/Songs';
//import { ConnectedEditor as Editor } from './containers/Editor';
//import { loadSongs } from './actions/SongActions';
//import { login } from './actions/SessionActions';

class App extends Component {
    render() {
        return (
            <div>    
                <Router>
                  <div>
                   <NavigationBar />
                    <Switch>
                        <Route exact path='/' component={Home}/>  
                        <Route path='/songs' component={Songs} />
                        <Route path='/friends' render={ () => { return (<p>Friends:</p>)}} />
                        <Route render={ () => { return <p>Not found</p>}}/>
                    </Switch>  
                    </div>
                </Router>
            </div>
        );
    }
}


export const WrapperApp = connect(null)(App);