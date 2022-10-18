import { NextPage } from "next";
import React, { MutableRefObject, useState } from "react";
import Navigator from "../../classes/Navigator";
import { useMenu, useTheme } from "../../utils/hooks";


interface Props {
	navigator: MutableRefObject<Navigator | null>;
}

const useHeader = (props: Props) => {
	const {toggleMenu,menu,setMenu} = useMenu()
    const {toggleTheme} = useTheme()
    
	return { toggleTheme, toggleMenu, menu, gotoIntroCard, gotoConcernsCard, gotoProjectsCard, gotoSkillsCard, gotoContactCard, closeMenu };

	
	function gotoIntroCard() {
		props.navigator.current?.navigateTo(0);
		setMenu(false);
	}
	function gotoConcernsCard() {
		props.navigator.current?.navigateTo(1);
		setMenu(false);
	}
	function gotoProjectsCard() {
		props.navigator.current?.navigateTo(2);
		setMenu(false);
	}
	function gotoSkillsCard() {
		props.navigator.current?.navigateTo(3);
		setMenu(false);
	}
	function gotoContactCard() {
		props.navigator.current?.navigateTo(4);
		setMenu(false);
	}
	function closeMenu() {
		setMenu(false);
	}
};

export default useHeader;
