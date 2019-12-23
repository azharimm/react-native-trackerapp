import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
            headerText="Sign In to Your Account"
            errorMessage=""
            onSubmit={() => {}}
            submitButtonText="Sign In" />
            <NavLink
            routeName="Signup"
            text="Don't have account ? sign up instead" />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
})

export default SigninScreen