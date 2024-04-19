import styles from "@/styles/Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";

export default function Landing(){
    return(
        <div className={styles.Landing}>
            <Images src={"/images/beehive.svg"} width={300} height={200}/>
            <Images src={"/images/yipie.svg"} width={480} height={300}/>
            <button className={styles.startButton}>Start Buzzin'</button>
        </div>
    )
}