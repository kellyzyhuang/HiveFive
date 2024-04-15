import styles from './Header.module.css';
import Image from 'next/image'; 
import Link from 'next/link';

export default function Header({ title }) {
  return(
    <header className={styles.header}>
      {/* <Image src="/images/bee.png" alt="bee icon" width={1} height={1}/>  */}
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.counter}>123</div>
        </li>
        <li className={styles.listItem}>
          <h1 className={styles.pageTitle}>{title}</h1>
        </li>
        <li className={styles.listItem}>
          <button className={styles.settings}><Link href="/Settings"><Image className={styles.settingsImg} src={"/images/Settings_Icon.svg"} width={30} height={30}/>Settings</Link></button>
        </li>
      </ul>
    </header>
  )
}