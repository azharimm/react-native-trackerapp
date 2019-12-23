import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        //make api request to signup
        try {
            const response = await trackerApi.post('/signup', {email, password})
            console.log(response.data)
        }catch(e) {
            console.log(e.response.data)
        }
        //if signup modify state

        //if signup fail
    }
}

const signin = (dispatch) => {
    return ({email, password}) => {
        //try to signin

        //if success modify state

        //if fail
    }
}

const signout = (dispatch) => {
    return () => {
        //
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedIn: false}
)