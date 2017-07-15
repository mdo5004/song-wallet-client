import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';

export class Tray extends Component {

    render() {
        const songs = this.props.songs.map( (song,index) => {
            return <li key={index}><NavLink exact to={`/songs/${song.id}`}>
                {song.name} - {song.artist}
                </NavLink>
            </li>
        })
        return (
            <div>
                Tray
                <ul>
                    {songs}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}
export const ConnectedTray = connect(mapStateToProps,null)(Tray)