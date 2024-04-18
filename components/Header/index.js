import { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image'; 
import Link from 'next/link';

export default function Header({ title, backImage, link, exit }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State variable to track popup open/close
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  return(
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          {exit ? (
            <button onClick={togglePopup}>
              {backImage && <Image src={backImage} width={40} height={40} alt="Back icon" />}
            </button>
          ) : (
            link && (
              <Link href={link}>
                  {backImage && <Image src={backImage} width={40} height={40} alt="Back icon" />}
              </Link>
            )
          )}

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
            <Image  className={styles.exit} onClick={toggleMenu} src="/images/x.svg" width={30} height={30} alt="x icon"/>
            <Link href="/menu-item-1" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/profile.svg" width={30} height={30} alt="profile icon"/>Profile</Link>
            <Link href="/Settings" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/Settings.svg" width={30} height={30} alt="settings icon"/>settings</Link>
            <Link href="/menu-item-3" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/bee-icon.svg" width={30} height={30} alt="bee icon"/>Mini Adventure</Link>
            <Link href="/menu-item-3" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/trophey.svg" width={30} height={30} alt="acheivments icon"/>Acheivments</Link>
            <Link href="/menu-item-3" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/about.svg" width={30} height={30} alt="about icon"/>About</Link>
          </div>
        </div>
      )}
      {isPopupOpen && (
        <div className={styles.popup}>
          <p>Are you sure you want to leave? your progress will be lost.</p>
          <button onClick={togglePopup}>Stay</button>
          <Link href="/">
              <button>Leave</button>
          </Link>
        </div>
      )}
    </header>
  )
}
