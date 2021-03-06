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
        <a href="https://www.peru.travel/pe" target="_blank"><Image src="/peru.png" width="100" height="80"></Image></a>
        <p className="description">
          Puedes ver el repositorio de esta página <a href="https://github.com/Brian-RG/next-netlify-starter" target="_blank">aquí</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
