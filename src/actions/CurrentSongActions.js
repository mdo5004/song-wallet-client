import { loadSongs } from './SongActions'

export function loadCurrentSong(id){
    return (dispatch) =>{
        return fetch(`/songs/${id}`, {
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
        return fetch(`/songs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            }
        }).then( response => response.json())
        .then( song => {
            dispatch( {type: 'SAVE_SONG', payload:song});
            song['id'] = id;
            dispatch( {type: 'UPDATE_SONG', payload:song});
        })
        .catch( console.log ) 
    }
}

export function parseSong(song) {
    const title = song.match(/{title:(.*)}/)[1]
    const artist = song.match(/{subtitle:(.*)}/)[1]
    return {title: title, artist: artist, content: song}
}