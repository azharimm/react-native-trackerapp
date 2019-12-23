import createDataContext from './createDataContext'

const authReducer = (state, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

const signup = (dispatch) => {
    return ({email, password}) => {
        //make api request to signup

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