import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import './css/App.css';
import { ConnectedHome as Home } from './containers/Home';
import { NavigationBar } from './components/navbar';
import { Songs } from './containers/Songs';
import { ConnectedGroups as Groups } from './containers/Groups';
import { ConnectedSetlists as Setlists } from './containers/Setlists';
import { Container } from 'semantic-ui-react';
//import { ConnectedEditor as Editor } from './containers/Editor';
//import { loadSongs } from './actions/SongActions';
//import { login } from './actions/SessionActions';

class App extends Component {
    render() {
        return (
            <Container>
                <Router>
                        <NavigationBar >
                            <Switch>
                                <Route exact path='/' component={Home}/>  
                                <Route path='/songs' component={Songs} />
                                <Route path='/groups' component={Groups} />
                                <Route path='/setlists' component={Setlists} />
                                <Route path='/friends' render={ () => { return (<p>Friends:</p>)}} />
                                <Route render={ () => { return <p>Not found</p>}}/>
                            </Switch>  
                        </NavigationBar>
                </Router>
            </Container>
        );
    }
}


export const WrapperApp = connect(null)(App);