const initialState = []

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEW_SESSION':
            return action.payload;
        case 'DELETE_SESSION':
            return [];
        default:
            return state;
    }
}

export default sessionReducer;