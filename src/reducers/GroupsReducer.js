const initialState = []

const groupsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_GROUP':
            return state;
        case 'REMOVE_GROUP':
            return state;
        case 'GET_GROUPS':
            return action.payload;
        case 'UPDATE_GROUP':
            const group = action.payload;
            const id = group.id;
            debugger
            return Object.assign({}, state, {
                [id]: Object.assign({}, state[id], group
            )});
        default:
            return state;
    }
}

export default groupsReducer;