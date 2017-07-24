export function loadSongs() {
    return (dispatch) => {
        
        return fetch('/songs', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then( response => response.json())
          .then( songs => dispatch( {type: 'GET_SONGS', payload: songs}) )
          .catch(console.log)
    }
}