import React, { MutableRefObject } from 'react'
import Navigator from '../../classes/Navigator'

interface Props{
    className : string,
    id : string
    navigator : MutableRefObject<Navigator | null>
    noTopScroll : boolean | undefined
    noBottomScroll : boolean | undefined
}

const usePageCard = (props: Props) : Props => {

  return {...props}
}

export default usePageCard