import { useState, useEffect } from "react";
import './Home.css';
import GradientBackground from "../components/GradientBackground";

function Home(){
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-content">
            <GradientBackground />
            <div className="overlay" />
            <div className="content-container">
                <h1>EmotionGen</h1>
            </div>
        </div>
    )
}
 


export default Home