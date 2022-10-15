import { NextPage } from 'next'
import React, { MutableRefObject, useState } from 'react'
import Navigator from '../../classes/Navigator'

interface Props{
    navigator : MutableRefObject<Navigator | null>
}

const useHeader = (props : Props) => {
    const [menu , setMenu] = useState(false)
  return{toggleMenu,menu,gotoIntroCard,gotoConcernsCard,gotoProjectsCard,gotoSkillsCard,gotoContactCard,closeMenu}

  function toggleMenu(){
    setMenu(menu => !menu)
  }

  function gotoIntroCard(){
    props.navigator.current?.navigateTo(0)
    setMenu(false)
  }
  function gotoConcernsCard(){
    props.navigator.current?.navigateTo(1)
    setMenu(false)
  }
  function gotoProjectsCard(){
    props.navigator.current?.navigateTo(2)
    setMenu(false)
  }
  function gotoSkillsCard(){    
    props.navigator.current?.navigateTo(3)
    setMenu(false)
  }
  function gotoContactCard(){
    props.navigator.current?.navigateTo(4)
    setMenu(false)
  }
  function closeMenu(){
    setMenu(false)
  }
}

export default useHeader