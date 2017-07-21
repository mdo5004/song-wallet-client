import { combineReducers } from 'redux'
import songsReducer from './SongsReducer'
import currentSongReducer from './CurrentSongReducer'

const rootReducer = combineReducers({
    songs: songsReducer,
    currentSong: currentSongReducer,
});

export default rootReducer;