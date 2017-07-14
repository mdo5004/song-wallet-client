import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const n = this.props.word.length;
        const chordStyle = {
            left: `0ch`,
        }
        const wordStyle = {
            
            left: `-${n}ch`,
        }
        return (
            <span>
            <chord style={chordStyle}>{this.props.chord}</chord>
            <word style={wordStyle}>{this.props.word} </word>
            </span>
        )
    }
}