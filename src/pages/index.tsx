import Head from 'next/head'
import Header from '../components/Header'
import HomeNews from '../components/HomeNews'

//Analytics
// import ReactGa from 'react-ga'
// ReactGa.initialize(process.env.ID_ANALYTICS)

// ReactGa.pageview(window.location.pathname + window.location.search)

// console.log(process.env.ID_ANALYTICS)

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