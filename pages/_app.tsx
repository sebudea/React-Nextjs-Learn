// es un archivo especial para la personalización global de tu aplicación, como estilos o navegación.
// es como el layout para App Router
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
