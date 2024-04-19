import styles from "./NavBar.module.css";
import Images from "next/Images";

export default function NavBar(){
    return(
        <nav className={styles.navBar}>
            <a href={"/"}>Quiz</a> {/* will change to icon*/}
            <div className={styles.navList}>{/* will add icons with the anchors */}
                <a href={"/"}>Activity</a>
                <a href={"/"}>Learn More</a>
                <a href={"/"}>Settings</a>
                <a href={"/"}>Home</a>
            </div>
        </nav>
    )
}