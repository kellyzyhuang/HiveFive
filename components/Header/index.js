import { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image'; 
import Link from 'next/link';
import { useCorrectAnswers } from '../../CorrectAnswersContext';

export default function Header({ title, backImage, link, exit }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { correctAnswersTotal } = useCorrectAnswers();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };  

  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          {!exit && !link && (
            <div className={styles.pointsCounter}>
              <Image src="/images/Gem.svg"  width={30} height={30} alt="Gem icon" className={styles.gemIcon}/>
              <span className={styles.counter}>{correctAnswersTotal}</span>
            </div>
            
          )}
          {exit ? (
            <button 
              style={{
                border: 'none',
                padding: 0,
                background: 'none'
              }} 
              onClick={togglePopup}
            >
              {backImage && <Image src={backImage} width={20} height={20} alt="Back icon" className={styles.exitIcon}/>}
            </button>
          ) : (
            link && (
              <Link href="/Home">
                {backImage && <Image src={backImage} width={20} height={20} alt="Back icon" className={styles.backIcon}/>}
              </Link>
            )
          )}
        </li>
        <li className={styles.listItem}>
          <h1 className={styles.pageTitle}>{title}</h1>
        </li>
        <li className={styles.listItem}>
          <button className={styles.navIcon} onClick={toggleMenu}>
            <Image src="/images/Hamburger.svg" width={40} height={40} alt="Hamburger icon" className={styles.menuImage}/>
          </button>
          {/* <p className={styles.navIconLabel}>Menu</p> */}
        </li>
      </ul>
      {isMenuOpen && (
        <div className={styles.overlay}>
          <div className={styles.menu}>
            <Image className={styles.exit} onClick={toggleMenu} src="/images/x.svg" width={30} height={30} alt="x icon"/>
            <Link href="/Profile" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/profile.svg" width={30} height={30} alt="profile icon"/>Profile</Link>
            <Link href="/Settings" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/Settings.svg" width={30} height={30} alt="settings icon"/>Settings</Link>
            <Link href="/GameRules" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/bee-icon.svg" width={30} height={30} alt="bee icon"/>Mini Adventure</Link>
            <Link href="/Achievements" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/trophey.svg" width={30} height={30} alt="achievements icon"/>Achievements</Link>
            <Link href="/About" className={styles.menuItem}><Image className={styles.hamIcon} src="/images/about.svg" width={30} height={30} alt="about icon"/>About</Link>
          </div>
        </div>
      )}
      {isPopupOpen && (
        <div className={`${styles.overlay}`}>
          <div className={styles.popup}>
            <p>Are you sure you want to leave? your progress will not be saved.</p>
            <Link href="/Home">
              <button className={`${styles.popUpButton} ${styles.leave}`}>Leave</button>
            </Link>
            <button className={styles.popUpButtonStay} onClick={togglePopup}>Stay</button>
          </div>
        </div>
      )}
    </header>
  );
}
