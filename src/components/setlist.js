import React from 'react';
import { Grid, Card, List, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export class Setlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }
    editSetlist = () => {
        const editing = this.state.editing
        this.setState({
            editing: !editing
        })
    }

    render() {
        const {name, songs, id} = this.props["setlist"];
        let listOfSongs, toggleButton;
        if (this.state.editing) {
            listOfSongs = songs.map( (song, index) => {
                return (
                    <List.Item key={index}>
                        <List.Content>{song.title}</List.Content>
                    </List.Item>
                )})
            toggleButton = <Button basic color='green' onClick={this.editSetlist}>Save</Button>
        } else {
            listOfSongs = songs.map( (song, index) => {
                return (
                    <List.Item key={index}>
                        <List.Content as={NavLink} to={`/songs/${song.id}`}>{song.title}</List.Content>
                    </List.Item>
                )})
           toggleButton = <Button basic color='yellow' onClick={this.editSetlist}>Edit</Button>
        }
        
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
                            {toggleButton}
                            <Button basic color='red'>Delete</Button>
                        </div>
                    </Card.Content>
                </Card>
            </Grid.Column>

        )
    }
}
export default Setlist;