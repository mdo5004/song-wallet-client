export function newSetlist() {
    return {type:'NEW_SETLIST', payload:{name:'', songs: []}}
}

export function renameSetlist(name) {
    return {type:'RENAME_SETLIST',payload:name}
}

export function addSongToSetlist(song){
    return {type: 'ADD_SONG_TO_CURRENT_SETLIST', payload:song}
}

export function removeSongFromSetlist(songId){
    return {type: 'REMOVE_SONG_FROM_CURRENT_SETLIST', payload:songId}
}

export function createSetlist(setlist) {
    return {type: '', payload:null}
}