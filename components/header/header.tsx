import { NextComponentType, NextPage } from "next";
import Image from "next/image";
import React, { MutableRefObject } from "react";
import siteLogo from "../../public/logos/logo-light.png";
import lightMenuIcon from "../../public/icons/light-menu-icon.png";
import lightThemeIcon from "../../public/icons/light-theme-icon.png";
import introIcon from "../../public/icons/intro-icon.png";
import concernsIcon from "../../public/icons/concerns-icon.png";
import projectsIcon from "../../public/icons/projects-icon.png";
import skillsIcon from "../../public/icons/skills-icon.png";
import contactIcon from "../../public/icons/contact-icon.png";
import Navigator from "../../classes/Navigator";
import useHeader from "./useHeader";

interface Props {
	navigator: MutableRefObject<Navigator | null>;
	noTopScroll: Boolean | undefined;
}

const Header: NextPage<Props> = ({ navigator, noTopScroll }) => {
	const { menu, toggleMenu ,gotoIntroCard,gotoConcernsCard,gotoProjectsCard,gotoSkillsCard,gotoContactCard,closeMenu} = useHeader({navigator});
	return (
		<div className="header">
			<div className="logo" onClick={gotoIntroCard}>
				<Image src={siteLogo} alt={"site logo"} />
			</div>
			<div className="header-navigate">
				{!noTopScroll && (
					<svg
                        width="100"
                        height="100"
                        viewBox="-7 0 50 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => navigator.current?.navigateUp()}
					>
						<path
							d="M0.305774 17.978L0.305103 17.9741C0.31195 13.2905 2.17547 8.80014 5.4878 5.4878C8.80624 2.16936 13.307 0.305085 18 0.305084C22.693 0.305083 27.1937 2.16936 30.5122 5.4878C33.8247 8.80031 35.6882 13.2909 35.6949 17.9748L35.694 17.9803L35.6787 18.0706C35.6652 18.1504 35.6449 18.269 35.618 18.4237C35.564 18.7333 35.4835 19.1876 35.377 19.7657C35.1641 20.9221 34.8475 22.5738 34.4334 24.5541C33.6049 28.5154 32.3865 33.7884 30.8262 39.0402C29.2647 44.296 27.3657 49.5134 25.1805 53.373C24.0876 55.3033 22.9321 56.8777 21.7245 57.9475C20.5183 59.016 19.283 59.5623 18.0169 59.492C16.742 59.4212 15.4963 58.7602 14.2837 57.6046C13.0714 56.4493 11.9138 54.8193 10.8204 52.8598C8.63412 48.9415 6.73483 43.7606 5.17345 38.5814C3.61311 33.4057 2.39474 28.247 1.56632 24.381C1.15218 22.4483 0.835662 20.8395 0.622726 19.7142C0.516261 19.1515 0.435699 18.7098 0.381786 18.4089C0.354831 18.2584 0.334537 18.1432 0.320998 18.0657L0.305774 17.978Z"
							stroke="white"
							strokeOpacity="0.73"
							strokeWidth="0.610169"
						/>
						<path
							d="M2.7585 15.2908L2.74573 15.2173C2.75258 11.2649 4.32676 7.4758 7.12413 4.68045C9.92763 1.87897 13.73 0.305085 17.6949 0.305084C21.6597 0.305083 25.4621 1.87897 28.2656 4.68044C31.0631 7.47597 32.6373 11.2654 32.644 15.2181L32.6439 15.2188L32.631 15.2952C32.6195 15.3627 32.6023 15.463 32.5795 15.594C32.5338 15.856 32.4656 16.2406 32.3754 16.73C32.195 17.709 31.9268 19.1073 31.5759 20.7839C30.874 24.1378 29.8417 28.6019 28.5199 33.0477C27.1969 37.4975 25.5888 41.9118 23.7396 45.1756C22.8146 46.8081 21.8384 48.1364 20.8204 49.0376C19.8039 49.9374 18.7685 50.3926 17.7118 50.3339C16.6462 50.2748 15.6004 49.7225 14.5775 48.7484C13.5548 47.7744 12.5764 46.3985 11.6511 44.7413C9.80072 41.4275 8.19231 37.0439 6.86945 32.659C5.54762 28.2776 4.5154 23.9103 3.81351 20.6371C3.46263 19.0009 3.19447 17.6389 3.01408 16.6862C2.92388 16.2098 2.85564 15.8359 2.80997 15.5812C2.78714 15.4539 2.76996 15.3564 2.7585 15.2908Z"
							stroke="white"
							strokeOpacity="0.73"
							strokeWidth="0.610169"
						/>
						<path
							d="M4.58653 13.0722L4.57625 13.0133C4.58317 9.64598 5.93195 6.41767 8.32857 4.03553C10.7314 1.64718 13.9908 0.305085 17.3898 0.305084C20.7887 0.305084 24.0481 1.64718 26.451 4.03553C28.8478 6.41785 30.1966 9.64646 30.2033 13.0141L30.1928 13.0762C30.1829 13.1338 30.1682 13.2196 30.1485 13.3316C30.1093 13.5556 30.0506 13.8844 29.9731 14.3029C29.818 15.14 29.5874 16.3359 29.2857 17.7697C28.6822 20.638 27.7948 24.4553 26.6585 28.2567C25.5211 32.0621 24.1392 35.8344 22.5514 38.6219C21.7572 40.0161 20.9205 41.1478 20.05 41.9142C19.1812 42.6793 18.3011 43.0621 17.4066 43.0127C16.5034 42.9628 15.613 42.4971 14.7377 41.6679C13.8626 40.8389 13.0237 39.6661 12.2291 38.2506C10.6401 35.42 9.25802 31.6739 8.12068 27.924C6.98439 24.1776 6.09699 20.4431 5.49351 17.6439C5.19185 16.2446 4.9613 15.0799 4.80622 14.2652C4.72868 13.8579 4.67002 13.5382 4.63077 13.3204C4.61115 13.2116 4.59638 13.1282 4.58653 13.0722Z"
							stroke="white"
							strokeOpacity="0.73"
							strokeWidth="0.610169"
						/>
						<path
							d="M6.41437 10.6692L6.40683 10.6259C6.4137 7.89139 7.50561 5.2702 9.44468 3.33586C11.3899 1.39537 14.0284 0.305085 16.7797 0.305084C19.531 0.305084 22.1694 1.39537 24.1147 3.33586C26.0539 5.27037 27.1458 7.89186 27.1525 10.6267L27.1447 10.6727C27.1367 10.7198 27.1247 10.7898 27.1088 10.8812C27.0768 11.064 27.0291 11.3324 26.966 11.6741C26.8399 12.3576 26.6523 13.334 26.4068 14.5048C25.9158 16.847 25.1938 19.9638 24.2695 23.0673C23.3441 26.1746 22.2207 29.2514 20.9315 31.523C20.2865 32.6594 19.609 33.5779 18.9071 34.1982C18.2067 34.8172 17.5045 35.1206 16.7966 35.0814C16.0799 35.0416 15.3673 34.6704 14.6604 33.9984C13.9538 33.3266 13.2742 32.3738 12.6288 31.22C11.3384 28.913 10.2148 25.8572 9.28947 22.7953C8.36516 19.7368 7.64321 16.6876 7.1522 14.4017C6.90676 13.2592 6.7192 12.3081 6.59304 11.643C6.52996 11.3105 6.48224 11.0495 6.45033 10.8718C6.43437 10.7829 6.42236 10.7149 6.41437 10.6692Z"
							stroke="white"
							strokeOpacity="0.73"
							strokeWidth="0.610169"
						/>
						<path
							d="M22.5763 6.22375C22.5763 9.59363 19.8445 12.3254 16.4746 12.3254C13.1047 12.3254 10.3729 9.59363 10.3729 6.22375C10.3729 2.85388 13.1047 0.122059 16.4746 0.122059C19.8445 0.122059 22.5763 2.85388 22.5763 6.22375Z"
							fill="#D9D9D9"
						/>
					</svg>
				)}
			</div>
			<div className="options">
				<div className="menuIcon option">
					{
                        menu &&
                        <>
                            <div className="menu-overlay" onClick={closeMenu}></div>
                            <div className="menu">
                                <div className="option" onClick={gotoIntroCard}>
                                    <div className="option-icon" >
                                        <Image src={introIcon} />
                                    </div>
                                    <div className="option-text">Intro</div>
                                </div>
                                <div className="option" onClick={gotoConcernsCard}>
                                    <div className="option-icon">
                                        <Image src={concernsIcon} />
                                    </div>
                                    <div className="option-text">Concerns</div>
                                </div>
                                <div className="option" onClick={gotoProjectsCard}>
                                    <div className="option-icon">
                                        <Image src={projectsIcon} />
                                    </div>
                                    <div className="option-text">Projects</div>
                                </div>
                                <div className="option" onClick={gotoSkillsCard}>
                                    <div className="option-icon">
                                        <Image src={skillsIcon} />
                                    </div>
                                    <div className="option-text">Skills</div>
                                </div>
                                <div className="option" onClick={gotoContactCard}>
                                    <div className="option-icon">
                                        <Image src={contactIcon} />
                                    </div>
                                    <div className="option-text">Contact</div>
                                </div>
                            </div>
                        </>
					}
					<Image src={lightMenuIcon} alt={"light menu icon"} onClick={toggleMenu} />
				</div>
				<div className="themeIcon option">
					<Image src={lightThemeIcon} alt={"light theme icon"} />
				</div>
			</div>
		</div>
	);
};

export default Header;
