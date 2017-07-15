import React, { Component } from 'react';
import '../css/Display.css'
import interpreter from './interpreter';

export class Display extends Component {

    renderText = () => {
        const renderedText = interpreter(this.props.text);
        return {__html: renderedText}
    }
    
    render(){
        return (
            <pre id="song-display" dangerouslySetInnerHTML={this.renderText()}></pre>
        )
    }
}

Display.defaultProps = {
    text: ''
}