import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Brian application" />
        <Image src="./peru.png"></Image>
        <p className="description">
          Puedes ver el repositorio de esta página <a href="https://github.com/Brian-RG/next-netlify-starter" target="_blank">aquí</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
