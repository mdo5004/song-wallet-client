import React from 'react';
import Setlist from '../components/setlist';
import { Grid } from 'semantic-ui-react';

export class Setlists extends React.Component {

    render() {
        const setlistsIndex = [
            {
                name:"Setlist A",
                band:"Incubus Tribute Band",
                songs: [{
                    title: "Stairway to Heaven",
                    artist: "Led Zeppelin"
                },{
                    title: "Who Are You?",
                    artist: "The Who"
                }],
            },
        {
                name:"Setlist B",
                band:"Incubus Tribute Band",
                songs: [{
                    title: "Stairway to Heaven",
                    artist: "Led Zeppelin"
                },{
                    title: "Who Are You?",
                    artist: "The Who"
                }],
            }]
        const setlists = setlistsIndex.map( (setlist, index) => {
            return <Setlist setlist={setlist} key={index}/>
        })
        return (
            <Grid columns={3} doubling stackable container>
                    {setlists}
            </Grid>
        )
    }
}