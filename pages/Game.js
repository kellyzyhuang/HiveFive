import Head from 'next/head'
import styles from '@/styles/Game.module.css'
import Spline from '@splinetool/react-spline';

export default function Game() {
  return (
    <>
      <Head>
        <title>Mini Adventure Game</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.screen}>
          <Spline scene="https://prod.spline.design/NKMlXnwqxeA6QkkB/scene.splinecode" />
        </div>
      </main>
    </>
  );
}
