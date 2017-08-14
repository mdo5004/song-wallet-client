const initialState = []

const newSetlistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEW_SETLIST':
            return action.payload;
        case 'CREATE_SETLIST':
            return [];
        case 'ADD_SONG_TO_CURRENT_SETLIST':
            let newState = Object.assign({},state);
            newState.songs.push(action.payload);
            return newState;
        case 'RENAME_SETLIST':
            return {...state, name: action.payload};
        default:
            return state;
    }
}

export default newSetlistsReducer;