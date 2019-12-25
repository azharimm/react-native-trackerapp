import {useContext} from 'react'
import {Context as TrackContext} from '../context/trackContext'
import {Context as LocationContext} from '../context/locationContext'

export default () => {
    const {createTracks} = useContext(TrackContext)
    const {state: {locations, name}} = useContext(LocationContext)

    const saveTracks = () => {
        createTracks(name, locations)
    }

    return [saveTracks]
}