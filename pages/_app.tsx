import "../styles/globals.scss";
import "../styles/test/test.css";
import "../styles/index-page/index-page.scss";
import "../styles/components/header.scss";
import "../styles/components/scrollIndicator.scss";
import "../styles/components/pageCard.scss";
import "../styles/components/project.scss";

import type { AppProps } from "next/app";
import { ContextProvider } from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	);
}

export default MyApp;
