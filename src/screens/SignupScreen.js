import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const SignupScreen = ({navigation}) => {
    return (
        <>
            <Text style={{fontSize: 48}}>SignupScreen</Text>
            <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')}></Button>
            <Button title="Go to Main" onPress={() => navigation.navigate('mainFlow')}></Button>
        </>
    )
}

const styles = StyleSheet.create({})

export default SignupScreen