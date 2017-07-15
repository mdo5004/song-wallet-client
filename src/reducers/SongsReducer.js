const initialState = []

const songsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_SONG':
            console.log("Adding song...")
            return state.concat(action.payload);
        case 'REMOVE_SONG':
            return state.filter( song => song.id !== action.payload );
        case 'GET_SONGS':
            
            return action.payload;
        default:
            return state;
    }
}

export default songsReducer;