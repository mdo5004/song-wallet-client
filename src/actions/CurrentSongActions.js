//import { loadSongs } from './SongActions'

export function loadCurrentSong(id){
    return (dispatch) =>{
        return fetch(`/api/songs/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            }
        }).then( response => response.json())
        .then( song => dispatch( {type: 'GET_SONG', payload:song} ) )
        .catch( console.log ) 
    }
}
export function updateCurrentSong(content){  
    return {type:'UPDATE_SONG', payload:content}
}

export function saveCurrentSong(id,content){
    return (dispatch) =>{
        return fetch(`/api/songs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            }
        }).then( response => response.json())
        .then( song => {
            dispatch( {type: 'SAVE_SONG', payload:song});
            song['id'] = parseInt(id,10);
            dispatch( {type: 'UPDATE_SONG', payload:song});
        })
        .catch( console.log ) 
    }
}

export function parseSong(song) {
    let title = song.match(/{title:(.*)}/) || song.match(/{t:(.*)}/)
    let artist = song.match(/{subtitle:(.*)}/) || song.match(/{s:(.*)}/) 
    if (title instanceof Array && title.length > 1) {
        title = title[1]
    }
    if (artist instanceof Array && artist.length > 1) {
        artist = artist[1]
    }
    return {title: title, artist: artist, content: song}
}