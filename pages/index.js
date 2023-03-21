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
          <title>Valentine&apos;s Pizzeria</title>
        </Head>
        <Navbar cartCount={cartCount} />
        <Hero />
        <Main data={data} handleClick={handleClick} cartCount={cartCount} />
      </>
  )
}
