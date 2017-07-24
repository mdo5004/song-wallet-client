const initialState = []

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return state;
        case 'REMOVE_USER':
            return state;
        case 'GET_USERS':
            return state;
        default:
            return state;
    }
}

export default usersReducer;