import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Menu extends Component {
    
    render() {
        const songs = this.props.songs.map( (song,index) => {
            return <li>{song.name} - {song.artist}</li>
        })
        return (
            <div>
               Menu
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
export const ConnectedMenu = connect(mapStateToProps,null)(Menu)