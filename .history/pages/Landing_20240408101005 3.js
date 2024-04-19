import styles from "@/styles/Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";

export default function Landing(){
    return(
        <div className={styles.Landing}>
            <Images src={"/images/beehive.svg"} width={300} height={200}/>
            <button className={styles.btnTutorial}></button>
        </div>
    )
}