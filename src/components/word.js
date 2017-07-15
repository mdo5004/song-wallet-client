import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const deltaX = this.props.chord.length;
        const chordStyle = {
            position: 'relative',
            top: "-1em",
        }
        const wordStyle = {
            position: 'relative',
            left: `-${deltaX}ch`
            }
        
        return (
            <span>
            <chord style={chordStyle}>{this.props.chord}</chord>
            <word style={wordStyle}>{this.props.word} </word>
            </span>
        )
    }
}