import createDataContext from './createDataContext'

const trackReducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}

const fetchTracks = dispatch => (name) => {}
const createTracks = dispatch => (name) => {}

export const {Context, Provider} = createDataContext(
    trackReducer,
    {fetchTracks, createTracks},
    []    
)