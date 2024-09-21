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
            <div className="content-container">
                <h1>EmotionGen</h1>
                <div>
                <Container>
                    <p>Generate Images based on your Emotions using AI powered tools</p>
                </Container>
                <Container>
                    
                </Container>
                </div>
                <Button text="Get Started" onClick={handleClick} type="primary" size="large"/>   
            </div>
        </div>
    )
}
 


export default Home