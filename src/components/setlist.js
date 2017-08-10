import React from 'react';
import { Grid, Card, List } from 'semantic-ui-react';

const Setlist = (props) => {
    
    const {name, songs} = props["setlist"];
    
    const listOfSongs = songs.map( (song, index) => {
        return (
            <List.Item key={index}>
                <List.Content>{song.title}</List.Content>
            </List.Item>
        )
    })
    
    return (
        <Grid.Column>
            <Card >
              <Card.Content>
              <Card.Header>{name}</Card.Header>
              </Card.Content>
               <Card.Content extra>
                {listOfSongs}
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}
export default Setlist;