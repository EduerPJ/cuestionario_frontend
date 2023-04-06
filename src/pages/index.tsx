import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cuestionario</title>
        <meta name="description" content="Cuestionario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="text-3xl font-bold underline">Cuestionario</h1>
        </div>
      </main>
    </>
  )
}
