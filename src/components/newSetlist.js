import React from 'react';
import { Grid, Card, Button, List, Checkbox } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as newSetlistActions from '../actions/NewSetlistActions';
import * as songActions from '../actions/SongActions';
import { connect } from 'react-redux';

export class NewSetlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            song:'',
        }
    }
    componentDidMount() {
        this.props.actions.newSetlist();
        this.props.songActions.loadSongs();
    }
    handleChange = (event) => {
        event.preventDefault();

        let target = event.target.name;
        let value = event.target.value;

        if (target==='name'){
            this.props.actions.renameSetlist(value);
        } else if(target==='song'){
            this.setState({
                song: event.target.value
            })
        }
    }
    handleCheckbox = (event, data) => {
        event.preventDefault();
        let songId = parseInt(data['data-id'],10)
        if (data.checked){
            let songToAdd = this.props.songs.filter( song => parseInt(song.id,10) === songId)
            this.props.actions.addSongToSetlist(songToAdd[0])
        } else {
            this.props.actions.removeSongFromSetlist(songId)
        }
    }
    handleKeyDown = (event) => {
        let key = event.keyCode;
        if (key === 13){
            let song = {
                title: this.state.song,
                artist: '',
                id: null
            }
            this.props.actions.addSongToSetlist(song)
            this.setState({
                song: ''
            })
        }
    }
    render() {
        let card;
        let checked;
        checked = (this.props.newSetlist.hasOwnProperty("songs")) ? this.props.newSetlist.songs.map( song => parseInt(song.id,10) ) : []
        
        if (this.props.isCreating){
            let checkboxes = this.props.songs.map( (song,index) => {
                return (<div key={index}><Checkbox 
                label={song.title}  
                onChange={this.handleCheckbox} 
                data-id={song.id}
                checked={ checked.includes(song.id) }
                /><br/></div>)
            })
            
            card = (
                <Card >
                    <Card.Content>
                        <Card.Header>{this.props.newSetlist.name}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <label>Name</label>
                        <input 
                            name="name" 
                            value={this.props.newSetlist.name} 
                            onChange={this.handleChange} 
                            placeholder="New Setlist"
                            />
                        <br/>
                        <label>Songs</label>
                        <List>{this.props.newSetlist.songs.map( 
                                (song, index) => <List.Item key={index}>
                                    <List.Content>{song.title}</List.Content>
                                </List.Item>)}
                        </List>
                        {checkboxes}
                        <input 
                            name="song" 
                            value={this.state.song} 
                            onChange={this.handleChange} 
                            onKeyDown={this.handleKeyDown} 
                            placeholder="Or create a new song">
                        </input>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic 
                                color='green'
                                onClick={this.saveNewSetlist}>
                                Save
                            </Button>
                            <Button basic 
                                color='red'
                                onClick={this.cancelNewSetlist}>
                                Cancel
                            </Button>
                        </div>
                    </Card.Content>
                </Card>)
        } else {
            card = (<Card >
                    <Card.Content>
                        <Button onClick={this.props.callback}>New...</Button>     
                    </Card.Content>    
                </Card>
            )
        }
        return (
            <Grid.Column>
                {card}
            </Grid.Column>
        )
    }
}

NewSetlist.defaultProps = {
    newSetlist: {
        name: '',
        songs: [],
    },
    songs: [],
}

const mapStateToProps = (state) => {
    return {
        newSetlist: state.newSetlist,
        songs: state.songs,
    }
}
const mapDispatchToProps = (dispatch) => {  
    return {
        actions: bindActionCreators(newSetlistActions, dispatch),
        songActions: bindActionCreators(songActions, dispatch)
    };
}
export const ConnectedNewSetlist = connect(mapStateToProps,mapDispatchToProps)(NewSetlist)