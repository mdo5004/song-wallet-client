export function loadSongs() {
    return (dispatch) => {
        
        return fetch('/songs', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("auth_token")
            }
        }).then( response => response.json())
          .then( songs => dispatch( {type: 'GET_SONGS', payload: songs }) )
          .catch( resp => dispatch( {type: 'GET_SONGS', payload: [] }))
    }
}