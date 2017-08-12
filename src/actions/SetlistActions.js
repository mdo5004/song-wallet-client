export function loadSetlists() {
    return (dispatch) => {
        
        return fetch('https://vast-fortress-67646.herokuapp.com/setlists', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            }
        }).then( response => response.json())
          .then( setlists => dispatch( {type: 'GET_SETLISTS', payload: setlists }) )
          .catch( resp => dispatch( {type: 'GET_SETLISTS', payload: [] }))
    }
}
export function newSetlist(setlist) {
    return (dispatch) => {
        
        return fetch('/setlists', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            },
            body: JSON.stringify(setlist)
        }).then( response => response.json())
          .then( setlist => dispatch( {type: 'ADD_SETLIST', payload: setlist}))
          .catch( response => console.log(response))
    }
}