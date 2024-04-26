import { useState } from 'react';
import styles from "@/styles/Achievements.module.css";
import Images from 'next/image';
import Link from 'next/link';
import Header from "@/components/Header";
import NavBar from '@/components/NavBar';
import Rewards from '@/components/Rewards';
import Awards from '@/components/Awards';

export default function Achievements(){
    const [showRewards, setShowRewards] = useState(false);
    const [buttonBackgroundColor, setButtonBackgroundColor] = useState('var(--secondary-color)');

    const toggleContent = (content) => {
        if (content === 'rewards') {
            setShowRewards(true);
            setButtonBackgroundColor('var(--accent-color)');
        } else {
            setShowRewards(false);
            setButtonBackgroundColor('var(--secondary-color)');
        }
    };

    const [applyText, setApplyText] = useState('Apply');

    const toggleApplyText = () => {
        setApplyText((prevText) => (prevText === 'Apply' ? 'Remove' : 'Apply'));
    };

    return(
        <div className={styles.main}>
            <div className={styles.screen}>
                <Header title="Achievements" backImage="/images/back.svg" link="/"/>
                <NavBar className={styles.nav}/>
                <div className={styles.buffer}></div>
                <div className={styles.buttons}>
                    <button onClick={() => toggleContent('achievements')} className={styles.achievements} style={{ backgroundColor: showRewards ? 'var(--secondary-color)' : 'var(--accent-color)' }}>Achievements</button>
                    <button onClick={() => toggleContent('rewards')} className={styles.rewards} style={{ backgroundColor: showRewards ? 'var(--accent-color)' : 'var(--secondary-color)' }}>Rewards</button>
                </div>
                {showRewards ? (
                    <div className={styles.rewardsContent}>
                        <div className={styles.rewardsItem}>
                            <h3 className={styles.itemName}>Mr. Beenard III</h3>
                            <Images src="/images/beenardIII.png" width={100} height={100} alt="beenard the third" className={styles.lockedImg}/>
                            <button className={styles.applyButton} onClick={toggleApplyText}>{applyText}</button>
                        </div>
                        <Rewards/>
                        <Rewards/>
                        <Rewards/>
                        <Rewards/>
                        <Rewards/>
                        <Rewards/>
                        <Rewards/>
                        <div className={styles.buffer}></div>
                    </div>
                    
                ) : (
                    <div className={styles.rewardsContent}>
                        <Awards itemName="Novice Beekeeper" requirements="Completed" image="/images/award.png"/>
                        <Awards itemName="Junior Beekeeper" requirements="Complete 20 Quizzes" image="/images/locked.svg"/>
                        <Awards itemName="Senior Beekeeper" requirements="Complete 50 Quizzes" image="/images/locked.svg"/>
                        <Awards itemName="Master Beekeeper" requirements="Complete 100 Quizzes" image="/images/locked.svg"/>
                        <Awards itemName="Grand Beekeeper" requirements="Match 10 Bees" image="/images/locked.svg"/>
                        <Awards itemName="Lord Beekeeper" requirements="Match 20 Bees" image="/images/locked.svg"/> 
                        <div className={styles.buffer}></div>
                    </div>
                )}
            </div>
        </div>
    )
}
