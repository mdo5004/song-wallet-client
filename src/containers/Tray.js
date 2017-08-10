import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as songActions from '../actions/SongActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { List } from 'semantic-ui-react';


export class Tray extends Component {

    render() {
        const songs = this.props.songs.map( (song,index) => {
            return (<List.Item key={index} as={NavLink} to={`/songs/${song.id}`}>
                        <List.Content>
                            <List.Header>{song.title}</List.Header>
                            <List.Description>{song.artist}</List.Description>
                        </List.Content>
                    </List.Item>
                   ) 
        })
        songs.push(<List.Item key='-1' as={NavLink} to={`/songs/new`}>
                        <List.Content>
                            <List.Header>New</List.Header>
                        </List.Content>
                    </List.Item>)
        return (
            <div>
                <List selection verticalAlign='middle'>
                    {songs}
                </List> 
            </div>
        )
    }
    componentDidMount() {
        this.props.actions.loadSongs();
    }
    componentDidUpdate(prevProps) {


    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}
const mapDispatchToProps = (dispatch) => {  
    return {
        actions: bindActionCreators(songActions, dispatch)
    };
}
export const ConnectedTray = connect(mapStateToProps,mapDispatchToProps)(Tray)

