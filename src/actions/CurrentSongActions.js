export function loadCurrentSong(id){
    return (dispatch) =>{
        return fetch(`/songs/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("auth_token")
            }
        }).then( response => response.json())
        .then( song => dispatch( {type: 'GET_SONG', payload:song} ) )
        .catch( console.log ) 
    }
}
export function updateCurrentSong(content){  
    return {type:'UPDATE_SONG', payload:{content: content}}
}

export function saveCurrentSong(id,content){
    return (dispatch) =>{
        return fetch(`/songs/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(content),
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("auth_token")
            }
        }).then( response => response.json())
        .then( song => dispatch( {type: 'SAVE_SONG', payload:song} ) )
        .catch( console.log ) 
    } 
}