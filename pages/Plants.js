import styles from "@/styles/Plants.module.css";
import React from "react";
import { useState } from "react";
import MatchingResults from "@/components/MatchingResults";
import { incorrectAnswers } from "@/data/incorrectInventory";
import Image from "next/image";
import Header from "@/components/Header";

export default function Plants(){

    const [selectedFlower, setSelectedFlower] = useState(null);
    const [showResults, setShowResults] = useState(false);

    const flowerAnswers = {
        joe_pye_weed: "Joe Pye Weed has a vanilla scent that captivates the interest of bees.",
        lavander: "Lavender has a sweet fragrance that attract bees.",
        catmint: "Catmint provides the bees a lot of place to collect their fill, as one stem includes tons of flower spikes.",
        sunflower: "Sunflowers are a good source of pollen as they help with the immune system of bees.",
        zinnia: "Congratulations! You are correct! Despite bees not being attracted to the colour red, Zinnia are especially popular among honey bees!",
        coneflower: "Due to its long blooming period, bees are able to get their fill with coneflowers."
    };

    const clickImage = (flowerName) => {
        setSelectedFlower(flowerName);
        setShowResults(true);
    };

    const hideWrongResults = () => {
        setSelectedFlower(null);
        setShowResults(false);
    };
    return(
        <>
        <main>
            <Header title="Matching" backImage="/images/back.svg" link="/"/>
            <div>
                <div>
                    <h4>Plants</h4>
                    <p>Select the honey bee’s favourite flower, Zinnia.</p>
                </div>
                <div>
                    <Image src="/images/joe_pye_weed.jpeg" alt="joe pye weed flower" width={166} height={160} onClick={() => clickImage("joe_pye_weed")}/>
                    <Image src="/images/lavander.jpeg" alt="lavander flower" width={166} height={160} onClick={() => clickImage("lavander")}/>
                    <Image src="/images/catmint.jpeg" alt="catmint flower" width={166} height={160} onClick={() => clickImage("catmint")}/>
                </div>
                <div>
                    <Image src="/images/sunflower.jpeg" alt="sunflower" width={166} height={160} onClick={() => clickImage("sunflower")}/>
                    <Image src="/images/zinnia.jpeg" alt="zinnia flower" width={166} height={160} onClick={() => clickImage("zinnia")}/>
                    <Image src="/images/coneflower.jpeg" alt="coneflower" width={166} height={160} onClick={() => clickImage("coneflower")}/>
                </div>
            </div>
        </main>
        {showResults && (
                <MatchingResults
                    tagLine={selectedFlower === 'zinnia' ? "Easy BEEzy!" : "BUZZy Bummer!"}
                    correct={selectedFlower === 'zinnia' ? flowerAnswers.zinnia : selectedFlower ? "You are correct!" : ""}
                    incorrect={Object.keys(flowerAnswers).filter(flowerName => flowerName !== 'zinnia').map(flowerName => ({
                        id: flowerName,
                        headline: `This is a ${flowerName.replace('_', ' ')}.`,
                        description: flowerAnswers[flowerName]
                    }))}
                />
            )}
        </>
    )
}