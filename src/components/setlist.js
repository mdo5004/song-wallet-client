import React from 'react';
import { Grid, Card, List, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Setlist = (props) => {

    const {name, songs, id} = props["setlist"];

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
                <Card.Content>
                    {listOfSongs}
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green' as={NavLink} to={`/setlists/${id}/edit`}>Edit</Button>
                        <Button basic color='red'>Delete</Button>
                    </div>
                </Card.Content>
            </Card>
        </Grid.Column>

    )
}
export default Setlist;