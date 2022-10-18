import { useContext } from 'react'
import {Context, context} from '../context/context'



export default function useStore() : Context {
    let store = useContext(context)
    if(store) return store
    store = {}
    return store

}