const initialState = []

const groupsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_GROUP':
            return state;
        case 'REMOVE_GROUP':
            return state;
        case 'GET_GROUPS':
            return action.payload;
        case 'ADD_MEMBER_TO_GROUP':
            let newState = state.slice();
            newState[action.payload.groupIndex].users.push({id:null, name:action.payload.name})
            return newState;
        default:
            return state;
    }
}

export default groupsReducer;