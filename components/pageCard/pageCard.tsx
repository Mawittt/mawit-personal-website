import { NextComponentType, NextPage } from "next";
import React, { MutableRefObject } from "react";
import Navigator from "../../classes/Navigator";
import Header from "../header/header";
import ScrollIndicator from "../scroll-indicator/scroll-indicator";
import usePageCard from "./usePageCard";

interface Props {
	children: JSX.Element | JSX.Element[];
	className: string;
	navigator: MutableRefObject<Navigator | null>;
	noTopScroll: boolean | undefined;
	noBottomScroll: boolean | undefined;
	id: string;
}

const PageCard: NextPage<Props> = (props) => {
	const { className, id, navigator, noTopScroll, noBottomScroll } = usePageCard(props);
	return (
		<div className={"card-container " + className} id={id}>
			<div className={"card "} >
				<Header navigator={navigator} noTopScroll={noTopScroll} />
				{props.children}
				<ScrollIndicator navigator={navigator} noBottomScroll={noBottomScroll} />
			</div>
		</div>
	);
};

export default PageCard;
