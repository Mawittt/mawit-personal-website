import '../styles/globals.scss'
import "../styles/test/test.css"
import "../styles/index-page/index-page.scss"
import "../styles/components/header/header.scss"
import "../styles/components/scroll-indicator/scrollIndicator.scss"
import "../styles/components/pageCard/pageCard.scss"

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
