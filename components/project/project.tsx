import Image from "next/image";
import React from "react";
import useProject from "./useProject";

const Project = () => {
	const { project } = useProject();
	return (
		<div className="project" prevent-card-nav="true">
			<div className="title">
				<h2>My projects</h2>
			</div>
			<div className="project-content">
				<div className="project-info">
					<div className="name">
						<h2>
							<a href="https://ndolo.herokuapp.com/" target={"_blank"} rel="noreferrer">
								{project.name}
							</a>
						</h2>
						<div className="webIcon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M14.36 12C14.44 11.34 14.5 10.68 14.5 10C14.5 9.32 14.44 8.66 14.36 8H17.74C17.9 8.64 18 9.31 18 10C18 10.69 17.9 11.36 17.74 12M12.59 17.56C13.19 16.45 13.65 15.25 13.97 14H16.92C15.9512 15.6683 14.4141 16.932 12.59 17.56M12.34 12H7.66C7.56 11.34 7.5 10.68 7.5 10C7.5 9.32 7.56 8.65 7.66 8H12.34C12.43 8.65 12.5 9.32 12.5 10C12.5 10.68 12.43 11.34 12.34 12ZM10 17.96C9.17 16.76 8.5 15.43 8.09 14H11.91C11.5 15.43 10.83 16.76 10 17.96ZM6 6H3.08C4.03886 4.32721 5.5748 3.06149 7.4 2.44C6.8 3.55 6.35 4.75 6 6ZM3.08 14H6C6.35 15.25 6.8 16.45 7.4 17.56C5.57862 16.9317 4.04485 15.6677 3.08 14M2.26 12C2.1 11.36 2 10.69 2 10C2 9.31 2.1 8.64 2.26 8H5.64C5.56 8.66 5.5 9.32 5.5 10C5.5 10.68 5.56 11.34 5.64 12M10 2.03C10.83 3.23 11.5 4.57 11.91 6H8.09C8.5 4.57 9.17 3.23 10 2.03M16.92 6H13.97C13.657 4.76146 13.1936 3.5659 12.59 2.44C14.43 3.07 15.96 4.34 16.92 6ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0V0Z"
									fill="var(--color-0)"
								/>
							</svg>
						</div>
					</div>
					<div className="description">a dating web app for single Cameroonians. most especially those in the diaspora</div>
					<div className="features-section">
						<h3>Features</h3>
						<ul className="features">
							{project.features.map((feature, index) => (
								<li className="feature" key={index}>
									{feature}
								</li>
							))}
						</ul>
					</div>
					<div className="technologies-section">
						<h3>Technologies</h3>
						<div className="technologies">
							{project.technologies.map((technology, index) => (
								<div className="technology" key={index}>
									{/* <Image src={technology} /> */}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="project-mockups">
					<div className="desktop mockup">
						{/* <Image src={project.desktopPreview} layout={"fill"} /> */}
					</div>
					<div className="tablet mockup">
						{/* <Image src={project.tabletPreview} layout={"fill"} /> */}
					</div>
					<div className="mobile mockup">
						{/* <Image src={project.mobilePreview} layout={"fill"} /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
