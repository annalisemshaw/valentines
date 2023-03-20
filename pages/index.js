import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Main  from '@/components/Main'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import data from '../data.js'

export default function Home() {
  const [cartCount, setCartCount] = useState(0)

  function handleClick() {
    setCartCount(
      cartCount + 1
    )
  }

  return (
      <>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>Valentine&apos;s Pizzeria</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        </Head>
        <Navbar cartCount={cartCount} />
        <Hero />
        <Main data={data} handleClick={handleClick} cartCount={cartCount} />
      </>
  )
}
