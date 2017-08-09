import React from 'react';
import { ConnectedTray as Tray } from './Tray';
import { ConnectedEditor as Editor } from './Editor';
import { ConnectedNewSong as NewSong } from './NewSong';
import { Route, Switch } from 'react-router';
import { Grid } from 'semantic-ui-react';

export class Songs extends React.Component {
    render() {
        return (
            <Grid container columns={2}>
                <Grid.Column width={3}>
                    <Tray />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Switch>
                        <Route path='/songs/new' component={NewSong} />
                        <Route path='/songs/:songId' component={Editor} />
                    </Switch>
                </Grid.Column>
            </Grid>

        )
    }
}