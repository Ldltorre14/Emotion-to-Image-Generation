import { useState } from "react";
import './NavHeader.css'

function NavHeader(){
    const [logState, setLogState] = useState(false);

    return (
        <div className="nav-header">
            <div className="main-logo-container">
                <a href="/">EmotionGen</a>
            </div>

            <div className="nav-ref-container">
                <a href="/">Home</a>
                <a href="about">About</a>
                {logState ? (
                    <a href="logout">Log Out</a>
                ) : (
                    <>
                        <a href="signin">Sign In</a>
                        <a href="signup">Sign Up</a>
                    </>
                )}
            </div>
        </div>
    )
}


export default NavHeader