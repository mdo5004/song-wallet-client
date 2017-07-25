import React from 'react';
import { newSong } from '../actions/SongActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class NewSong extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {song: {title:'Song Title', artist:'Song Artist', content:'Lyrics'}}
    }
    handleChange = (event) => {
        const field = event.target.name;
        const song = this.state.song;
        song[field] = event.target.value;
        return this.setState({song: song});
    }
    newSong = (event) => {
        event.preventDefault();
        debugger
        const song = this.state.song;
        const title = song.title;
        const artist = song.artist;
        const lyrics = song.content;
        
        song['content'] = `{title:${title}}\n{subtitle:${artist}}\n${lyrics}`
        console.log(song)
        this.props.newSong({song: song});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.newSong}>
                <label>Title</label>
                <input type="text" value={this.state.song.title} onChange={this.handleChange} name="title"></input>
                <label>Artist</label>
                <input type="text" value={this.state.song.artist} onChange={this.handleChange} name="artist"></input>
                <br/>
                <label>Lyrics</label>
                <textarea type="text" value={this.state.song.content} onChange={this.handleChange} name="content"></textarea>
                <button type='submit'>Create</button>
                    </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        newSong: newSong
    }, dispatch)
}
export const ConnectedNewSong = connect(null,mapDispatchToProps)(NewSong)