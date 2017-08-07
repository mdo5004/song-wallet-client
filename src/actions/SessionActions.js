export function login(auth_params) {
    return (dispatch) => {
        return fetch('/authenticate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(auth_params)
        }).then( response => response.json())
          .then( resp => {
            sessionStorage.setItem('auth_token',resp['auth_token']);
            dispatch({type:'NEW_SESSION', payload: resp['user']})
        })
          .catch( resp => console.log(resp))
    }
}

export function authenticateSession() {
    const auth_token = sessionStorage.getItem('auth_token');
    if (auth_token) {
        
    }
}

export function logout() {
    sessionStorage.setItem('auth_token','')
    return({type:'DELETE_SESSION', payload: []})
}