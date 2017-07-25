import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './css/App.css';
import { Home } from './containers/Home';
import { NavigationBar } from './components/navbar';
import { Songs } from './containers/Songs';
//import { ConnectedEditor as Editor } from './containers/Editor';
import { loadSongs } from './actions/SongActions';
import { login } from './actions/SessionActions';

class App extends Component {
    login = () => {
        this.props.login({"email":"michaeldavidoconnell@gmail.com","password":"password"})
    }
    render() {
        return (
            <div><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" /><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />    
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
componentDidMount(){
    this.login();
    this.props.loadSongs();
}
}

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({ 
        loadSongs: loadSongs,
        login: login
    }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
}
export const WrapperApp = connect(mapStateToProps,mapDispatchToProps)(App);