import React from 'react';
import { ConnectedTray as Tray } from './Tray';
import { ConnectedEditor as Editor } from './Editor';
import { ConnectedNewSong as NewSong } from './NewSong';
import { Route, Switch } from 'react-router';

export class Songs extends React.Component {
    render() {
        return (
            <div>
            <Tray />
                <Switch>
                    <Route path='/songs/new' component={NewSong} />
                    <Route path='/songs/:songId' component={Editor} />
                </Switch>
            </div>
        )
    }
}