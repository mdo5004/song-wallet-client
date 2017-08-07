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
        case 'UPDATE_SONG':
            return state.map( song => {
                if (song.id == action.payload.id) {
                    return action.payload
                } else {
                    return song
                }
            })
        default:
            return state;
    }
}

export default songsReducer;