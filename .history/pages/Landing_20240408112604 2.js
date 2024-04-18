import styles from "@/styles/Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";

export default function Landing(){
    return(
        <div className={styles.Landing}>
            <Images className={styles.beehiveImg} src={"/images/beehive2.svg"} width={420} height={300}/>
            <Images className={styles.leftCloud} src={"/images/left_cloud.svg"} width={200} height={100}/>
            <Images className={styles.rightCloud} src={"/images/right_cloud.svg"} width={200} height={100}/>
            <Images className={styles.happyBeenard} src={"/images/happy_bee.svg"} width={200} height={200}/>
            <div className={styles.text}>
                <h1>HiveFive</h1>
                <h3>Help save the bees.</h3>
            </div>
            <Images className={styles.grassImg} src={"/images/grass_bottom.svg"} width={430} height={300}/>
            <button className={styles.startButton}>Start Buzzin'</button>
        </div>
    )
}