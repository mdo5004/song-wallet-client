const initialState = []

const setlistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SETLISTS':
            return action.payload;
        case 'DELETE_SETLIST':
            return [];
        default:
            return state;
    }
}

export default setlistsReducer;