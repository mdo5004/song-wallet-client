import React from 'react';
import {NavLink} from 'react-router-dom';
import {Table} from 'react-bootstrap';

export const Tray = (props) => {
    const { songs } = props;
    const songLinks = songs.map( (song,index) => {
        return (
            <tr key={index}>
                <td >
                    <NavLink exact to={`/songs/${song.id}`}>
                        {song.title} - {song.artist}
                    </NavLink>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <Table striped bordered condensed >
                <thead>
                    <tr><td>Songs</td></tr>
                </thead>
                <tbody>
                    {songLinks}
                </tbody>
            </Table>

        </div>
    )
}

