import React from 'react';
import { ConnectedTray as Tray } from './Tray';
import { ConnectedEditor as Editor } from './Editor';
import { Route } from 'react-router';

export class Songs extends React.Component {
    render() {
        return (
            <div>
            <Tray />
            <Route path='/songs/:songId' component={Editor} />
            </div>
        )
    }
}