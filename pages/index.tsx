import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PageCard from "../components/pageCard/pageCard";
import Project from "../components/project/project";
import useStore from "../facade/store";
import crossPlatformIllustration from "../public/illustrations/cross-platform.png";
import performanceIllustration from "../public/illustrations/performance.png";
import UiIllustration from "../public/illustrations/ui.png";
import linkedInLogo from "../public/logos/linkedIn-logo.png";
import useHome from "./useHome";

const Home: NextPage = () => {
	const { navigator, emailRef, subjectRef, bodyRef, sendMessage , overlay } = useHome();
	return (
		<div className={"index-page"}>
			<Head>
				<title>Mawit's Personal Website</title>
				<meta name="description" content="a website to showcase Mawit's skills" />
				<link rel="icon" href="/icons/favicon.png" />
			</Head>

			<main>
                {overlay && <div className="menu-overlay" onClick={()=>alert()}></div>}
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
							I am a Web Developer and UI/UX Designer, with experience in backend API development too. I view the web as a gift
							and love making use of it to build helpful and profitable products for the good of both myself and my peers.
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
									<svg width="102" height="103" viewBox="0 0 102 103" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M1 102H18.4184M101 102H88.1306M18.4184 102V88.119C18.4184 87.5668 18.8661 87.119 19.4184 87.119H25.1944C25.7467 87.119 26.1944 87.5668 26.1944 88.119V102M18.4184 102H26.1944M26.1944 102H34.2037M34.2037 102V75.1726C34.2037 74.6203 34.6514 74.1726 35.2037 74.1726H42.6905C43.2428 74.1726 43.6905 74.6203 43.6905 75.1726V102M34.2037 102H43.6905M43.6905 102H52.2442M52.2442 102V56.3482C52.2442 55.7959 52.6919 55.3482 53.2442 55.3482H63.1415C63.6938 55.3482 64.1415 55.7959 64.1415 56.3482V102M52.2442 102H64.1415M64.1415 102H75.2613M75.2613 102V37.747C75.2613 37.1947 75.709 36.747 76.2613 36.747H87.858C88.4147 36.747 88.8642 37.2017 88.8579 37.7583L88.1306 102M75.2613 102H88.1306M1 87.119C14.1934 83.746 49.507 67.7738 85.2146 2M85.2146 2L78.2939 6.53869M85.2146 2V9.7381"
											stroke="var(--color-0)"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
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
									<svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M2 27.346V4C2 2.89543 2.89543 2 4 2H100C101.105 2 102 2.89543 102 4V27.346M2 27.346V100C2 101.105 2.89543 102 4 102H100C101.105 102 102 101.105 102 100V27.346M2 27.346H102M9.77507 18.3146H32.2188C33.3234 18.3146 34.2188 17.4192 34.2188 16.3146V11.2833C34.2188 10.1788 33.3234 9.28332 32.2188 9.28332H9.77508C8.67051 9.28332 7.77508 10.1788 7.77508 11.2833V16.3146C7.77508 17.4192 8.67051 18.3146 9.77507 18.3146Z"
											stroke="var(--color-0)"
											stroke-width="4"
											stroke-linecap="round"
										/>
									</svg>
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
									<svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M28.0982 46.9825H4C2.89543 46.9825 2 46.087 2 44.9825V4C2 2.89543 2.89543 2 4 2H67.0543C68.1588 2 69.0543 2.89543 69.0543 4V27.3333M28.0982 46.9825V66.2105M28.0982 46.9825H42.1809M28.0982 66.2105H42.1809M28.0982 66.2105H19.1835M42.1809 66.2105V46.9825M42.1809 66.2105H47.801M42.1809 46.9825H47.801M47.801 66.2105V87.2982C47.801 88.4028 48.6965 89.2982 49.801 89.2982H80.2946M47.801 66.2105V46.9825M69.0543 27.3333H89.9871C91.0917 27.3333 91.9871 28.2288 91.9871 29.3333V71.8246M69.0543 27.3333C69.0543 27.3333 58.024 27.3333 49.7986 27.3333C48.6941 27.3333 47.801 28.2288 47.801 29.3333V46.9825M80.2946 89.2982V73.8246C80.2946 72.72 81.19 71.8246 82.2946 71.8246H91.9871M80.2946 89.2982V100C80.2946 101.105 81.19 102 82.2946 102H100C101.105 102 102 101.105 102 100V73.8246C102 72.72 101.105 71.8246 100 71.8246H91.9871"
											stroke="var(--color-0)"
											stroke-width="4"
											stroke-linecap="round"
										/>
									</svg>
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
					<div className="content">
						<Project />
					</div>
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
									<input type="text" ref={emailRef} id="email" />
								</label>
								<label htmlFor="subject">
									<span>Subject</span>
									<input type="text" ref={subjectRef} id="subject" />
								</label>
								<label htmlFor="body">
									<span>Body</span>
									<textarea name="" cols={30} rows={5} ref={bodyRef} id="body"></textarea>
								</label>
							</div>
							<div className="buttons">
								<button onClick={sendMessage}>Send a message</button>
								<div>or</div>
								<a href="https://www.linkedin.com/in/mawit-bikom-754558224/" target={"_blank"}>
									<Image src={linkedInLogo} />
								</a>
							</div>
						</form>
					</div>
				</PageCard>
			</main>
		</div>
	);
};

export default Home;
