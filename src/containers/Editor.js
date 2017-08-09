import React, { Component } from 'react';
import '../css/Editor.css';
import { Display } from '../components/display';
import { parseSong, loadCurrentSong, updateCurrentSong, saveCurrentSong } from '../actions/CurrentSongActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Editor extends Component {
    constructor(props){
        super(props);

        this.state = {
            editing: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const song = parseSong(event.target.value);
        this.props.updateCurrentSong(song);
    }
    saveCurrentSong = () => {
        this.props.saveCurrentSong(this.props.match.params.songId,this.props.currentSong)
    }
    initializeComponent = (songId) => {
        this.props.loadCurrentSong(songId);
    }
    componentDidMount(){

        this.initializeComponent(this.props.match.params.songId);    
    }
    componentWillReceiveProps(nextProps){
    if (nextProps.match.params.songId !== this.props.match.params.songId){
        this.initializeComponent(nextProps.match.params.songId);
    }
}
    toggleEditing = () => {
    const editing = this.state.editing;
    this.setState({
        editing: !editing,
    })
}
render() {

    return (
        <div>

            <div className='col-md-6'>
                <textarea 
                   style={{height:'400px', width: '100%'}} 
                   onChange={this.handleChange} 
                   value={this.props.currentSong.content}></textarea>
                <button onClick={this.saveCurrentSong}>Save</button>
            </div>
            <div className='col-md-6'>
                <Display text={this.props.currentSong.content}/>
            </div>
        </div>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadCurrentSong: loadCurrentSong,
        updateCurrentSong: updateCurrentSong,
        saveCurrentSong: saveCurrentSong,
    }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        currentSong: state.currentSong,
    }
}
Editor.defaultProps = {
    currentSong:{content:'',
                 title:'',
                 artist:''
                }
}
export const ConnectedEditor = connect(mapStateToProps,mapDispatchToProps)(Editor)