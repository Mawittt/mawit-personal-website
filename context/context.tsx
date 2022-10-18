import { type } from 'os'
import React, {  createContext, MutableRefObject, useRef, useState } from 'react'

interface Context{
    theme? : MutableRefObject<string>,
    menu? : Boolean,
    setMenu? : Function,
    overlay? : Boolean,
    setOverlay? : Function,
}
interface Props{
    children : React.ReactNode
}


const context = createContext<Context | null>(null)

const ContextProvider = (props : Props) => {
    const theme = useRef("dark")
    const [menu,setMenu] = useState<boolean>(false)
    const [overlay,setOverlay] = useState<boolean>(false)

  return (
    <context.Provider value={{theme,menu,setMenu,overlay,setOverlay}}>
        {props.children}
    </context.Provider>
  )
}

export {ContextProvider,context,}
export type {Context}