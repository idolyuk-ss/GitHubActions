import React from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Remedy Telehealth!
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Put a footer here.</p>
      </footer>
    </div>
  )
}
