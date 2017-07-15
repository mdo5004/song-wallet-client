import { combineReducers } from 'redux'
import songsReducer from './SongsReducer'

const rootReducer = combineReducers({
    songs: songsReducer,
});

export default rootReducer;