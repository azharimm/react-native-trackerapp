import React, {useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {SafeAreaView} from 'react-navigation'
import {Context as AuthContext} from '../context/authContext'

const AccountScreen = () => {
    const {signout} = useContext(AuthContext)
    return (
        <>
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout}></Button>
            </Spacer>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({})

export default AccountScreen