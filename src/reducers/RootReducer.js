import { combineReducers } from 'redux'
import songsReducer from './SongsReducer'
import groupsReducer from './GroupsReducer'
import usersReducer from './UsersReducer'
import friendsReducer from './FriendsReducer'
import sessionReducer from './SessionReducer'
import currentSongReducer from './CurrentSongReducer'
import setlistsReducer from './SetlistsReducer'
import newSetlistReducer from './NewSetlistReducer'

const rootReducer = combineReducers({
    songs: songsReducer,
    currentSong: currentSongReducer,
    users: usersReducer,
    friends: friendsReducer,
    groups: groupsReducer,
    setlists: setlistsReducer,
    newSetlist: newSetlistReducer,
    currentUser: sessionReducer
});

export default rootReducer;