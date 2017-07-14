import React, { Component } from 'react';
import '../css/Editor.css'
import interpreter from './interpreter';

export class Display extends Component {

    renderText = () => {
        const renderedText = interpreter(this.props.text);
        return {__html: renderedText}
    }
    
    render(){
        return (
            <div id="song-display" dangerouslySetInnerHTML={this.renderText()}></div>
        )
    }
}

Display.defaultProps = {
    text: ''
}