export function updateGroup(group) {
    return {type:'UPDATE_GROUP', payload:group}
}
export function getGroups() {
    return (dispatch) => {

        return fetch('https://vast-fortress-67646.herokuapp.com/api/groups', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": sessionStorage.getItem("auth_token")
            }
        }).then( response => response.json())
            .then( groups => {
            return dispatch( {type: 'GET_GROUPS', payload: groups })} )
            .catch( console.log )
    }
}