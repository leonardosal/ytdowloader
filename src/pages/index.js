import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [url, setUrl] = useState('');

  const videoDownload = async () => {
    await fetch('/api/download', { query: { url }});
  };

  return (
    <>
      <Head>
        <title>YT Downloader</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <input placeholder="Digite a url aqui..." className={styles.input} value={url} onChange={(e) => setUrl(e.target.value)} />
          <a className={styles.submit} disabled={!url} href={url ? `/api/download?url=${url}` : ''}>Baixar</a>
      </main>
    </>
  )
}
