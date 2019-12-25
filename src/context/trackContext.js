import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const fetchTracks = dispatch => (name) => {}
const createTracks = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations})
}

export const {Context, Provider} = createDataContext(
    trackReducer,
    {fetchTracks, createTracks},
    []    
)