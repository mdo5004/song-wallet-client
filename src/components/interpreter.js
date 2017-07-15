//import React from 'react';
//import Word from './word';

export default function interpreter(text) {

    let lines = text.split(/\n/)
    lines = lines.map( (line, index) => {

        let chords = line.match(/(\[[\w\d\s#/]+\])/g) || []
        let n = chords.length
        let line_of_chords = []
        let previous_length = 0
        for (var i = 0; i < n; i++){

            let chord = line.match(/(\[[\w\d\s#]+\])/)

            let len = chord[0].length

            line_of_chords[chord.index-previous_length] = chord[0]

            previous_length += len-2;

            line = line.slice(0,chord.index) + line.slice(chord.index+len)
        }
        line_of_chords = line_of_chords.join(' ').replace(/\[/g,"<chord>").replace(/\]/g,"</chord>")

        return ("<div><p>" + line_of_chords + "</p><p>" + line + "</p></div>")
    })

    return lines.join('')

}
