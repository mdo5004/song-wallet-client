import React, { Component } from 'react';
import { parse_lines } from './parsers'

export default class Section extends Component {
    
    render() {
        
        const lines = parse_lines(this.props.section.text)
        return (
            <div><h3>{this.props.section.name}</h3>
            {lines}
            </div>
        )
    }
    
}