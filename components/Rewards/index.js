import { useState } from 'react';
import styles from './Rewards.module.css';
import Image from 'next/image'; 
import Link from 'next/link';
import Images from 'next/image'; 

export default function Rewards() {

  
  return(
    <>
        <div className={styles.rewardsItem}>
            <Images src="/images/locked.svg" width={80} height={115} alt="locked" className={styles.lockedImg}/>
        </div>
    </>
  )
}