import Head from 'next/head'
import Header from '../components/Header'
import HomeNews from '../components/HomeNews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <HomeNews />
    </>
  )
}