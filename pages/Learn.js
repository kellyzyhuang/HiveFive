import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import NavBar from '@/components/NavBar';
import styles from '@/styles/Learn.module.css';
import Head from "next/head";
import Link from "next/link";

export default function Learn() {
    const [data, setData] = useState([]); 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = process.env.NEXT_PUBLIC_NAME;
                const url = `https://gnews.io/api/v4/search?q=bee%20AND%20(environment%20OR%20ecology%20OR%20pollination%20OR%20"habitat%20loss")%20AND%20NOT%20(sports%20OR%20entertainment%20OR%20technology%20OR%20finance%20OR%20trump)&lang=en&token=${apiKey}`;

                const response = await fetch(url);
                const responseData = await response.json();

                if (response.ok) {
                    setData(responseData.articles);
                } else {
                    console.error('Error fetching articles:', responseData.message);
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    };

    return (
        <>
            <main className={`${styles.main}`}>
                <Header title="Learn" backImage="/images/back.svg" link="/" />
                <div className={styles.screen}>
                    <div className={styles.search}>
                        <img src="/images/search_icon.svg" alt="search icon" className={styles.searchIcon}/>
                        <p className={styles.searchPlaceholder}>Search</p>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.chips}>
                        <p className={styles.sort}>Sort By: </p>
                        <button className={styles.chip}>Bees</button>
                        <button className={styles.chip}>Plants</button>
                        <button className={styles.chip}>Projects</button>
                    </div>
                    <div className={styles.articleContainer}>
                        <div className={styles.article}>
                            <img src="/images/bee-image.jpg" className={styles.coverPhoto} alt="Cover"></img>   
                        </div>
                        {data.map((article, index) => (
                        <div key={index} className={styles.infoContainer}>
                                <div className={styles.title}><p>{article.title}</p></div>
                                <div className={styles.date}>{formatDate(article.publishedAt)}</div>
                        </div>
                        ))}
                        <Link href="/Learn">
                            <Image src="/images/black_arrow.svg" alt="black next arrow" width={50} height={50} className={styles.blackArrow}/>
                        </Link>
                    </div>
                </div>
                <NavBar className={styles.nav}/>
            </main>
        </>
    );
}
