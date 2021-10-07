import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Head>
      <h1>Home</h1>
      </Head>
      <li>
        <Link href="/images">
          <a>IMAGES</a>
        </Link>
      </li>
      <li>
        <Link href="/search">
          <a>SEARCH</a>
        </Link>
      </li>
    </div>
  )
}


// Link= client side transitions between routes can be enable via link component.
// 