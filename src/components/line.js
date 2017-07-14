import React, { Component } from 'react';
import { parse_words } from './parsers';

export default class Line extends Component {
//    createMarkup() {
//        const words = parse_words(this.props.line)
//          return {__html: words};
//
//    }
    render() {
        const words = parse_words(this.props.line);
        return(
            <div>{words}</div>
        )
    }
}