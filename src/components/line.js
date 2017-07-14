import React, { Component } from 'react';
import { parse_words } from './parsers';

export default class Line extends Component {

    render() {
        const lineStyle = {
            position: 'relative',
            top: (this.props.line.n * 2) + "em",
        }
        const words = parse_words(this.props.line.text);
        return(
            <p style={lineStyle}>{words}</p>
        )
    }
}