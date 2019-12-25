import React, {useContext} from 'react'
import {Input, Button} from 'react-native-elements'
import Spacer from './Spacer'
import {Context as LocationContext} from '../context/locationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const {state : {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName} = useContext(LocationContext)

    const [saveTrack] = useSaveTrack()

    return (
        <>
        <Spacer>
            <Input
            value={name} 
            placeholder="Enter name"
            onChangeText={changeName} />
        </Spacer>
        <Spacer>
        {
            recording ? 
            <Button 
            title="Stop Recording"
            onPress={stopRecording} /> 
            :
            <Button 
            title="Start Recording"
            onPress={startRecording} />
        }
        </Spacer>
        <Spacer>
        {
            !recording && locations.length ?
            <Button title="Simpan" onPress={saveTrack} /> : null
        }
        </Spacer>
        </>
    )
}

export default TrackForm