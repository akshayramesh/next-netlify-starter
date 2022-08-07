import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Coffee Bean Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! #brewwithakshay" />
        <a href="http://budget.coffeebean.tech">Budget App </a>
        
      </main>

      <Footer />
    </div>
  )
}
