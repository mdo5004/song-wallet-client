import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as songActions from '../actions/SongActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';


export class Tray extends Component {
    
    render() {
        const songs = this.props.songs.map( (song,index) => {
            return <tr key={index}><td ><NavLink exact to={`/songs/${song.id}`}>
                {song.title} - {song.artist}</NavLink></td></tr>
        })
        songs.push(<tr key='-1'><td><NavLink exact to='/songs/new'>New Song...</NavLink></td></tr>)
        return (
            <div>
                <Table striped bordered condensed >
                  <thead>
                      <tr><td>Songs</td></tr>
                  </thead>
                   <tbody>
                    {songs}
                    </tbody>
                </Table>
                
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