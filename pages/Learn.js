import React, { useState, useEffect } from 'react';
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

    return (
        <>
            <main className={`${styles.main}`}>
                <Header title="Learn" backImage="/images/back.svg" link="/" />
                <div className={styles.screen}>
                    <div className={styles.articles}>
                        <div className={styles.buffer}></div>
                        {data.map((article, index) => (
                            <div key={index}>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                            </div>
                        ))}
                    </div>
                </div>
                <NavBar className={styles.nav}/>
            </main>
        </>
    );
}
