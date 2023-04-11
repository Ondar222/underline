import '@/styles/globals.css'
import '@/styles/footer.css'
import '@/styles/postcard.css'
import '@/styles/news.css'
import '@/styles/proect.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
