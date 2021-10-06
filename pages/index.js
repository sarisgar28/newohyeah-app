import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/images">
          <a>IMAGES</a>
        </Link>
      </li>
    </div>
  )
}


// Link= client side transitions between routes can be enable via link component.
// 