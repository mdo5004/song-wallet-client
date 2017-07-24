import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { Table } from 'react-bootstrap';


export class Tray extends Component {

    render() {
        const songs = this.props.songs.map( (song,index) => {
            return <tr key={index}><td ><NavLink exact to={`/songs/${song.id}`}>
                {song.title} - {song.artist}</NavLink></td></tr>
        })
        return (
            
                <Table striped bordered condensed >
                  <thead>
                      <tr><td>Songs</td></tr>
                  </thead>
                   <tbody>
                    {songs}
                    </tbody>
                </Table>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}
export const ConnectedTray = connect(mapStateToProps,null)(Tray)