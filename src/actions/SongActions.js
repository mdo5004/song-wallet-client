export function loadSongs() {
    return (dispatch) => {
        
        return fetch('https://vast-fortress-67646.herokuapp.com/api/songs', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            }
        }).then( response => response.json())
          .then( songs => dispatch( {type: 'GET_SONGS', payload: songs }) )
          .catch( resp => dispatch( {type: 'GET_SONGS', payload: [] }))
    }
}
export function newSong(song) {
    return (dispatch) => {
        
        return fetch('https://vast-fortress-67646.herokuapp.com/api/songs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            },
            body: JSON.stringify(song)
        }).then( response => response.json())
          .then( song => dispatch( {type: 'ADD_SONG', payload: song}))
          .catch( response => console.log(response))
    }
}