import React from 'react';
import Word from './word';
import Section from './section';
import Line from './line';

export function parse_sections(text) {

    let sections = text.split(/(\[\[[\w\d\s]*\]\])/)
    let section_indeces = [];
    let section_names = [];
    const header_text = sections[0].trim();
    for (var i = 0; i < sections.length; i++) {
        let section = sections[i].match(/\[\[([\w\d\s]*)\]\]/)
        if (section){
            section_indeces.push(i)
            section_names.push(section[1])
        }
    }
    let song_components = section_names.map( (name,index) => {
        let text = sections[section_indeces[index]+1].trim()
        return <Section section={{name: name, text: text}} key={index+1}/>
    })

    song_components.push(<Section section={{name: 'Header', text:header_text}} key={0} />)
console.log(song_components)
    return song_components

}
export function parse_words(text) {
    let words = text.split(' ');
    words = words.map( (word,index) => {
        const chord_word = word.split(/\[([\w\d\s#]+)\]/)
        let text = '';
        let chord = '';
        if (chord_word.length>1){
            chord = chord_word[1];
            text = chord_word[2];
        } else {
            text = chord_word[0];
        }
        return <Word key={index} word={word} chord={chord} />
    })
    return words
}
export function parse_lines(text) {
    return text.split(/\n/).map( (line,index) => {
        
        return <Line line={line} key={index} />
        
    })
    
}