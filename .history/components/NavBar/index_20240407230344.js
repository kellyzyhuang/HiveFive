import styles from "./NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <div className={styles.navMenu}>{/* will add */}
            <ul className={styles.navList}>
                <li className={styles.activity}>
                    <Link href="/Activity">
                        <div>
                            <Image className={styles.navIcon} src={"/images/activity_icon.svg"} width={10} height={10}/>
                            <span className={styles.label}>Activity</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.learnMore}>
                    <Link href="/">
                        <div>
                            <Image className={styles.navIcon}/>
                            <span className={styles.label}>Learn</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.quiz}>
                    <Link href={'/Quiz'}>
                        <div>
                            <Image className={styles.navIcon}/>
                            <span className={styles.label}>Quiz</span>
                        </div>
                    </Link>
                </li>
                <li className={styles.home}>
                    <Link href="/">
                        <div>
                            <Image className={styles.navIcon}/>
                            <span className={styles.label}>Home</span>
                        </div>
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}
