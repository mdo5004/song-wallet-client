import React, { Component } from 'react';
import '../css/Display.css'
import chordprojs from 'chordprojs';

export class Display extends Component {

    renderText = () => {
        const renderedText = chordprojs.parse(this.props.text).render();
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