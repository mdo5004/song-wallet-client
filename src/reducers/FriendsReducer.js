const initialState = [
    {
        id:2,
        name:"Ryan O'Connell"    
    },
    {
        id:3,
        name:"Levi Mason"
    },
    {
        id:4,
        name:"Daniel Carter"
    },
    {
        id:5,
        name:"Alexa Carter"
    }
]

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FRIEND':
            return state;
        case 'REMOVE_FRIEND':
            return state;
        case 'GET_FRIENDS':
            return state;
        default:
            return state;
    }
}

export default friendsReducer;