import React, { Component } from 'react';
import '../css/Editor.css'
import { parse_sections } from './parsers';

export class Display extends Component {

    renderText = () => {
        const renderedText = parse_sections(this.props.text);
        return {__html: renderedText}
    }
    
    render(){
        const renderedText = parse_sections(this.props.text);
        return (
            <div id="song-display" >{renderedText}</div>
        )
    }
}

Display.defaultProps = {
    text: ''
}