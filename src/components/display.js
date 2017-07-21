import React, { Component } from 'react';
import '../css/Display.css'
//import '../css/sheets-of-paper.css'
import chordprojs from 'chordprojs';

export class Display extends Component {

    renderText = () => {
        const renderedText = chordprojs.parse(this.props.text).render();
        return {__html: renderedText}
    }
    
    render(){
        return (
            <div id="song-display" className="page" dangerouslySetInnerHTML={this.renderText()}></div>
        )
    }
}

Display.defaultProps = {
    text: ''
}