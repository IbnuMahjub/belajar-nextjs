import Head from 'next/head'
import Navbar from 'components/Navbar'
import Section from 'components/Section'
import Konsultasi from 'components/Konsultasi'
import Layanan from 'components/Layanan'
import Problem from 'components/Problem'
import Question from 'components/Question'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Heylaw</title>
        <meta name="description" content="Heylaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section />
      <Konsultasi />
      <Layanan />
      <Problem />
      <Question />
    </div>
  )
}
