import Image from "next/image";
import React from "react";
import leftArrow from "../../public/icons/left-arrow-icon.png";
import rightArrow from "../../public/icons/right-arrow-icon.png";
import webIcon from "../../public/icons/web-icon.png";
import ndoloMobileMockup from "../../public/images/ndolo-mobile-mockup.png";
import ndoloTabletMockup from "../../public/images/ndolo-tablet-mockup.png";
import ndoloPCMockup from "../../public/images/ndolo-pc-mockup.png";
import expressLogo from "../../public/logos/express-logo.png";
import mongoDBLogo from "../../public/logos/mongoDB-logo.png";
import nodeJSLogo from "../../public/logos/nodeJS-logo.png";
import reactLogo from "../../public/logos/react-logo.png";
import sassLogo from "../../public/logos/sass-logo.png";
import socketIOLogo from "../../public/logos/socketIO-logo.png";
import useProject from "./useProject";

const Project = () => {
	const { project } = useProject();
	return (
		<div className="content">
			<div className="left arrow">
				<Image src={project.leftArrow} />
			</div>
			<div className="project">
				<div className="title">
					<h2>My projects</h2>
				</div>
				<div className="project-content">
					<div className="project-info" prevent-card-nav="true">
						<div className="name">
							<h2><a href="https://ndolo.herokuapp.com/" target={"_blank"}>{project.name}</a></h2>
							<div className="webIcon">
								<Image src={webIcon} />
							</div>
						</div>
						<div className="description">a dating web app for single Cameroonians. most especially those in the diaspora</div>
						<div className="features-section">
							<h3>Features</h3>
							<ul className="features">
								{project.features.map((feature,index) => (
									<li className="feature" key={index}>{feature}</li>
								))}
							</ul>
						</div>
						<div className="technologies-section">
							<h3>Technologies</h3>
							<div className="technologies">
								{project.technologies.map((technology,index) => (
									<div className="technology" key={index}>
										<Image src={technology} />
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="project-mockups">
						<div className="desktop mockup">
							<Image src={project.desktopPreview} layout={"fill"} />
						</div>
						<div className="tablet mockup">
							<Image src={project.tabletPreview} layout={"fill"} />
						</div>
						<div className="mobile mockup">
							<Image src={project.mobilePreview} layout={"fill"} />
						</div>
					</div>
				</div>
			</div>
			<div className="right arrow">
				<Image src={project.rightArrow} />
			</div>
		</div>
	);
};

export default Project;
