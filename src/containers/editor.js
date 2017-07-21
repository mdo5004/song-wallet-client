import React, { Component } from 'react';
import '../css/Editor.css';
import { Display } from '../components/display';
import { loadCurrentSong } from '../actions/CurrentSongActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Editor extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            html: this.props.html
        }
    }
    handleChange = (event) => {
        // dispatch update current song!!
        
//        this.setState({
//            html: event.target.value
//        })
    }
    initializeComponent = (songId) => {
        this.props.loadCurrentSong(songId);
    }
    componentDidMount(){
        this.initializeComponent(this.props.match.params.songId);    
    }
    componentWillReceiveProps(nextProps){
        this.initializeComponent(nextProps.match.params.songId);
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