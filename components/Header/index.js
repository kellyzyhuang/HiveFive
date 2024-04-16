import { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image'; 
import Link from 'next/link';

export default function Header({ title }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return(
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.counter}>123</div>
        </li>
        <li className={styles.listItem}>
          <h1 className={styles.pageTitle}>{title}</h1>
        </li>
        <li className={styles.listItem}>
          <button className={styles.navIcon} onClick={toggleMenu}>
            <Image src="/images/Hamburger.svg" width={60} height={60} alt="Hamburger icon"/>
          </button>
        </li>
      </ul>
      {isMenuOpen && (
      <div className={styles.overlay}>
        <div className={styles.menu}>
          <Image  className={styles.exit} onClick={toggleMenu} src="/images/x.svg" width={20} height={20} alt="x icon"/>
          <Link href="/menu-item-1" className={styles.menuItem}>Profile</Link>
          <Link href="/menu-item-2" className={styles.menuItem}>settings</Link>
          <Link href="/menu-item-3" className={styles.menuItem}>Mini Adventure</Link>
          <Link href="/menu-item-3" className={styles.menuItem}>Acheivments</Link>
          <Link href="/menu-item-3" className={styles.menuItem}>About</Link>
        </div>
      </div>
        
      )}

    </header>
  )
}
