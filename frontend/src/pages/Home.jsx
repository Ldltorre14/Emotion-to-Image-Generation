import { useState, useEffect } from "react";
import './Home.css';
import GradientBackground from "../components/GradientBackground";
import Overlay from "../components/overlay";
import Button from "../components/Button";
import Container from "../components/Container";

function Home(){
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClick = () => {
        alert("Button Clicked")
    };

    return (
        <div className="home-content">
            <GradientBackground />
            <Overlay />
            <div className="main-container">
                <h1>EmotionGen</h1>
                
                <div className="content-container">
                    <Container>
                        <h2>Section designed for emotion image</h2>
                        <div className="image-card">
                            <image>test</image>
                        </div>
                    </Container>
                    <Container>
                        <h2>Section designed for generated image</h2>
                        <div className="image-card">
                            <image>test</image>
                        </div>
                    </Container>
                </div>
                <Button text="Try It!" onClick={handleClick} type="primary" size="large"/>   
            </div>
        </div>
    )
}
 


export default Home