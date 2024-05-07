import Header from "@/components/Header";
import styles from '@/styles/Settings.module.css'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import ToggleSwitch from "@/components/Toggle";

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
                <img src="/images/profilepicture.jpg" alt="profile picture"/>
              </div>
              <div className={styles.profileDetails}>
                <h3>Jane</h3>
                <p>Edit profile</p>
              </div>
            </section>
            <section className={styles.settingOptions}>
              <h3>General</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <img src="/images/keyboard_tabbing.svg" alt="keyboard tabbing icon" className={styles.icon}/>
                  <div>
                    <h5>Keyboard Tabbing</h5>
                    <p>Use your keyboard to navigate the app</p>
                  </div>
                  <div className={styles.toggle}>
                    <ToggleSwitch/>
                  </div>
                </li>
                <li className={styles.listItem}>
                <img src="/images/sound.svg" alt="sound icon" className={styles.icon}/>
                  <div>
                    <h5>Sound</h5>
                    <p>Turn sound on</p>
                  </div>
                  <div className={styles.toggle2}>
                    <ToggleSwitch/>
                  </div>
                </li>
                <li className={styles.listItem}>
                <img src="/images/dark_mode.svg" alt="dark mode icon" className={styles.icon}/>
                  <div>
                    <h5>Dark Mode</h5>
                    <p>Switch to dark mode</p>
                  </div>
                  <div className={styles.toggle3}>
                    <ToggleSwitch/>
                  </div>
                </li>
                <li className={styles.listItem}>
                <img src="/images/font_size.svg" alt="font size icon" className={styles.icon}/>
                  <div>
                    <h5>Text Size</h5>
                    <p>Switch to a different sized font</p>
                  </div>
                  <form>
                    <select className={styles.dropdown}>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </form>
                </li>
                <li className={styles.listItem}>
                <img src="/images/type_face.svg" alt="type face icon" className={styles.icon}/>
                  <div>
                    <h5>Font</h5>
                    <p>Switch to a different typeface</p>
                  </div>
                  <form>
                    <select className={styles.dropdown2}>
                      <option>Lexend</option>
                      <option>Besley</option>
                      <option>Comic Sans</option>
                    </select>
                  </form>
                </li>
                <li className={styles.listItem}>
                <img src="/images/language.svg" alt="globe icon" className={styles.icon}/>
                  <div>
                    <h5>Language</h5>
                    <p>Switch to a different language</p>
                  </div>
                  <form>
                    <select className={styles.dropdown3}>
                      <option>English</option>
                      <option>French</option>
                      <option>Chinese</option>
                      <option>Spanish</option>
                    </select>
                  </form>
                </li>
              </ul>
            </section>
            <div className={styles.buffer}></div>
            <NavBar/>
        </div>  
      </main>
    </>
  )
}