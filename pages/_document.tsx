// permite personalizar el marcado HTML global de la aplicación, útil para añadir etiquetas de metadatos o scripts comunes en todas las páginas.
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
