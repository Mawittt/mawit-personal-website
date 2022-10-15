import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PageCard from "../components/pageCard/pageCard";
import Project from "../components/project/project";
import crossPlatformIllustration from "../public/illustrations/cross-platform.png";
import performanceIllustration from "../public/illustrations/performance.png";
import UiIllustration from "../public/illustrations/ui.png";
import linkedInLogo from "../public/logos/linkedIn-logo.png"
import useHome from "./useHome";

const Home: NextPage = () => {
    const {navigator,emailRef,subjectRef,bodyRef,sendMessage} = useHome()
	return (
		<div className={"index-page"}>
			<Head>
				<title>Mawit's Personal Website</title>
				<meta name="description" content="a website to showcase Mawit's skills" />
				<link rel="icon" href="/icons/favicon.png" />
			</Head>

			<main>
				<PageCard className={"intro-card "} id={"intro"} navigator={navigator} noTopScroll noBottomScroll={false}>
					<div className="intro-content">
						<div className="my-title">
							<div className="name">
								I am <em>Mawit Bikom Gad</em> a
							</div>
							<div className="title">
								Web Developer <em>&</em> UI/UX Designer
							</div>
						</div>
						<div className="description">
							I am a Web Developer and UI/UX Designer, with experience in backend API development. I view the web as a gift and
							love making use of it to build helpful and profitable products for the good of both myself and my peers.
						</div>
					</div>
				</PageCard>
				<PageCard className={"concerns-card"} id={"concerns"} navigator={navigator} noTopScroll={false} noBottomScroll={false}>
					<div className="concerns-content" prevent-card-nav="true">
						<div className="topic">
							<h2>My Concerns</h2>
						</div>
						<div className="details">
							<div className="concern-column">
								<div className="illustration">
									<Image src={performanceIllustration} />
								</div>
								<div className="description">
									<h3>Performance</h3>
									<p>
										building a product is not enough. I always strive to build experiences, and great performance is one
										of the pillars of a great experience, the use of best practices, optimized algorithms, and overall
										experience are my tools to achieve this
									</p>
								</div>
							</div>
							<div className="concern-column">
								<div className="illustration">
									<Image src={UiIllustration} />
								</div>
								<div className="description">
									<h3>Clean UI/UX</h3>
									<p>
										A product with a clean, straightforward, and easily understandable interface has proven to hook
										prospects way more effectively, using my acute ense of design, I always make sure my UI is as clean
										as It can be
									</p>
								</div>
							</div>
							<div className="concern-column">
								<div className="illustration">
									<Image src={crossPlatformIllustration} />
								</div>
								<div className="description">
									<h3>Cross Platform</h3>
									<p>
										it is clear that being universal, the web is accessible to nearly all and this is possible from a
										vast variety of devices. tailoring a web product to suit every different platform, screen size and
										browser is a skill I acquired and apply to products as required.{" "}
									</p>
								</div>
							</div>
						</div>
					</div>
				</PageCard>
				<PageCard className={"projects-card"} id={"projects"} navigator={navigator} noTopScroll={false} noBottomScroll={false}>
					<Project /> 
				</PageCard>
				<PageCard className={"skills-card"} id={"skills"} navigator={navigator} noTopScroll={false} noBottomScroll={false}>
					<div className="content" prevent-card-nav="true">
						<h2 className="title">Skills</h2>
						<div className="skills">
							<div className="skill">
								<h3>Programming Languages</h3>
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>javaScript</li>
								</ul>
							</div>
							<div className="skill">
								<h3>Frameworks & Technologies</h3>
								<ul>
									<li>Node.js</li>
									<li>React.js</li>
									<li>Socket.io</li>
									<li>MongoDB</li>
									<li>SCSS</li>
								</ul>
							</div>
							<div className="skill">
								<h3>Version Control</h3>
								<ul>
									<li>git</li>
									<li>github</li>
								</ul>
							</div>
							<div className="skill">
								<h3>Design Tool</h3>
								<ul>
									<li>Figma</li>
								</ul>
							</div>
							<div className="skill">
								<h3>Soft Skills</h3>
								<ul>
									<li>Problem Solving</li>
									<li>Time management</li>
									<li>Communication (English & French)</li>
									<li>Adaptability</li>
								</ul>
							</div>
						</div>
					</div>
				</PageCard>
				<PageCard className={"contact-card"} id={"contact"} navigator={navigator} noTopScroll={false} noBottomScroll>
					<div className="content" prevent-card-nav="true">
						<h2>Contact Me</h2>
						<form action="" onSubmit={sendMessage}>
							<div className="inputs">
								<label htmlFor="email">
									<span>Email</span>
									<input type="text" ref={emailRef} id="email"/>
								</label>
								<label htmlFor="subject">
									<span>Subject</span>
									<input type="text" ref={subjectRef} id="subject"/>
								</label>
								<label htmlFor="body">
									<span>Body</span>
									<textarea name="" cols={30} rows={5} ref={bodyRef} id="body"></textarea>
								</label>
							</div>
                            <div className="buttons">
                                <button onClick={sendMessage}>Send a message</button>
                                <div>or</div>
                                <a href="https://www.linkedin.com/in/mawit-bikom-754558224/" target={"_blank"}><Image src={linkedInLogo}/></a>
                            </div>
						</form>
					</div>
				</PageCard>
			</main>
		</div>
	);
};

export default Home;
