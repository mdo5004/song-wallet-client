import React, { Component } from 'react';
import '../css/Editor.css';
import { Display } from '../components/display';
import { loadCurrentSong, updateCurrentSong, saveCurrentSong } from '../actions/CurrentSongActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tray } from '../components/tray'
export class Editor extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            editing: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    render() {
        const editing = this.state.editing;
        return (
            <div>
               <h1>Editor</h1>
                <button onClick={this.toggleEditing}>{editing ? "View" : "Edit"}</button>
                <button onClick={this.saveCurrentSong}>Save</button>
                {editing ? (
            <textarea style={{height:'400px', width: '100%'}} onChange={this.handleChange} value={this.props.currentSong.content}></textarea>
                    ) : (
            <Display text={this.props.currentSong.content}/>
                    )}
            </div>
        )
    }
    
    handleChange = (event) => {
        this.props.updateCurrentSong(event.target.value);
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
        songs: state.songs,
        currentSong: state.currentSong,
    }
}
Editor.defaultProps = {
    currentSong:{content:''},
    songs:[]
}
export const ConnectedEditor = connect(mapStateToProps,mapDispatchToProps)(Editor)