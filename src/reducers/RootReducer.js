import { combineReducers } from 'redux'
import songsReducer from './SongsReducer'
import usersReducer from './UsersReducer'
import sessionReducer from './SessionReducer'
import currentSongReducer from './CurrentSongReducer'

const rootReducer = combineReducers({
    songs: songsReducer,
    currentSong: currentSongReducer,
    users: usersReducer,
    currentUser: sessionReducer
});

export default rootReducer;