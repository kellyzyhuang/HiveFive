import styles from "@/styles/Landing.module.css";
import Images from "next/image";
import Button from "@/components/buttons";
import Tutorial from "./Tutorial";
import Link from "next/link";
import { useRef } from 'react';

export default function Landing(){

    const audioRef = useRef(null);

    const playMusic = () => {
        audioRef.current.play();
    };

    return(
        <div className={styles.Landing}>
            <audio ref={audioRef} src="/music/Settings_BGM.mp3" loop/>
            <Images className={styles.beehiveImg} src={"/images/beehive2.svg"} width={420} height={200}/>
            <Images className={styles.leftCloud} src={"/images/left_cloud.svg"} width={200} height={100}/>
            <Images className={styles.rightCloud} src={"/images/right_cloud.svg"} width={200} height={100}/>
            <Images className={styles.happyBeenard} src={"/images/happy_bee.svg"} width={200} height={200}/>
            <div className={styles.text}>
                <h1 onClick={playMusic}>HiveFive</h1>
                <h3>Help save the bees.</h3>
            </div>
            <Images className={styles.grassImg} src={"/images/grass_bottom.svg"} width={430} height={300}/>
            <button className={styles.startButton}><Link href="/Tutorial">Start Buzzin'</Link></button>
        </div>
    )
}