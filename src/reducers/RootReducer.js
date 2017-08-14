import { combineReducers } from 'redux'
import songsReducer from './SongsReducer'
import usersReducer from './UsersReducer'
import sessionReducer from './SessionReducer'
import currentSongReducer from './CurrentSongReducer'
import setlistsReducer from './SetlistsReducer'
import newSetlistReducer from './NewSetlistReducer'

const rootReducer = combineReducers({
    songs: songsReducer,
    currentSong: currentSongReducer,
    users: usersReducer,
    setlists: setlistsReducer,
    newSetlist: newSetlistReducer,
    currentUser: sessionReducer
});

export default rootReducer;