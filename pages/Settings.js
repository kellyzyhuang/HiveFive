import Header from "@/components/Header";
import styles from '@/styles/Settings.module.css'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Settings() {
  return(
    <>
    <Head>
        <title>Hive Five</title>
        <meta name="description" content="Save the bees one question at a time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
        <div className={styles.screen}>
        <Header title="Settings" backImage="/images/back.svg" link="/" />
          <div className={styles.buffer}></div>
            <section className={styles.userProfile}>
              <div className={styles.profileIcon}>
                <img/> {/*to be replaced by profile icon */}
              </div>
              <div className={styles.profileDetails}>
                <h3>User Name</h3>
                <p>Edit profile</p>
              </div>
            </section>
            <section className={styles.settingOptions}>
              <h3>General</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  {/* <img/> to be replaced by icon */}
                  <h5>Keyboard Tabbing</h5>
                  <p>Use your keyboard to navigate the app</p>
                  {/* <img/> to be replaced by toggle button */}
                </li>
                <li className={styles.listItem}>
                  {/* <img/> to be replaced by icon */}
                  <h5>Sound</h5>
                  <p>Adjust notifications and general audio</p>
                  {/* <img/> to be replaced by toggle button */}
                </li>
                <li className={styles.listItem}>
                  {/* <img/> to be replaced by icon */}
                  <h5>Dark Mode</h5>
                  <p>Switch to dark mode</p>
                  {/* <img/> to be replaced by toggle button */}
                </li>
                <li className={styles.listItem}>
                  {/* <img/> to be replaced by icon */}
                  <h5>Text Size</h5>
                  <p>Switch to a different sized font</p>
                  <form>
                    <select></select>
                  </form>
                </li>
                <li className={styles.listItem}>
                  {/* <img/> to be replaced by icon */}
                  <h5>Font</h5>
                  <p>Switch to a different typeface</p>
                  <form>
                    <select></select>
                  </form>
                </li>
                <li className={styles.listItem}>
                  {/* <img/> to be replaced by icon */}
                  <h5>Language</h5>
                  <p>Switch to a different language</p>
                  <form>
                    <select></select>
                  </form>
                </li>
              </ul>
            </section>
            <nav className={styles.nav}>{/*to be replaced by real nav bar*/}</nav>    
        </div>  
      </main>
    </>
  )
}