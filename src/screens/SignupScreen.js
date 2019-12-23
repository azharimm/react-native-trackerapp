import React, {useContext} from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Context as AuthContext} from '../context/authContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'


const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext)
    
    return (
        <View style={styles.container}>
            <AuthForm 
            headerText="Sign Up For Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup} />
            <NavLink
            routeName="Signin"
            text="Already have an account ? Signin Instead" />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
})

export default SignupScreen