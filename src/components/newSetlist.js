import React from 'react';
import { Grid, Card, Button, List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as newSetlistActions from '../actions/NewSetlistActions';
import { connect } from 'react-redux';

export class NewSetlist extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            song: '',
        }
    }
    componentDidMount() {
        this.props.actions.newSetlist();
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
    handleKeyDown = (event) => {
        let key = event.keyCode;
        if (key === 13){
            let song = {
                title: this.state.song,
                artist: '',
                id: null
            }
            this.props.actions.addSongToSetlist(song)
            this.state.song = ''
        }
    }
    render() {
        let card;

        if (this.props.isCreating){
            card = (
                <Card >
                   <Card.Content>
                    <Card.Header>{this.props.newSetlist.name}</Card.Header>
                    </Card.Content>
                    <label>Name</label>
                    <input name="name" value={this.props.newSetlist.name} onChange={this.handleChange} placeholder="New Setlist"/>
                    <Card.Content>
                    <label>Songs</label>
                    <List>{this.props.newSetlist.songs.map( (song, index) => <List.Item key={index}><List.Content></List.Content>{song.title}</List.Item>)}</List>
                    <input name="song" type="text" value={this.state.song} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="New Song"></input>
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

const mapStateToProps = (state) => {
    return {
        newSetlist: state.newSetlist
    }
}
const mapDispatchToProps = (dispatch) => {  
    return {
        actions: bindActionCreators(newSetlistActions, dispatch)
    };
}
export const ConnectedNewSetlist = connect(mapStateToProps,mapDispatchToProps)(NewSetlist)