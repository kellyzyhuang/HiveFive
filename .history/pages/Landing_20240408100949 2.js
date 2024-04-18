import styles from "@/styles/Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";

export default function Landing(){
    return(
        <div className={styles.Landing}>
            <Images src={"/images/beehive.svg"} width={1} height={1}/>
            <button className={styles.btnTutorial}></button>
        </div>
    )
}