import React, { Component } from 'react';
import '../css/Editor.css';
import { Display } from '../components/display';
import { loadCurrentSong, updateCurrentSong } from '../actions/CurrentSongActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Editor extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            html: this.props.html
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.props.updateCurrentSong(event.target.value);
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
    
    render() {
        return (
            <div>
            <textarea onChange={this.handleChange} value={this.props.currentSong.content}></textarea>
            <Display text={this.props.currentSong.content}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadCurrentSong: loadCurrentSong,
        updateCurrentSong: updateCurrentSong,
    }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        currentSong: state.currentSong,
    }
}
Editor.defaultProps = {
    currentSong:{content:''}
}
export const ConnectedEditor = connect(mapStateToProps,mapDispatchToProps)(Editor)