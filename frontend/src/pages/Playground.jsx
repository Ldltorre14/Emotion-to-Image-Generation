import './Playground.css';
import { useRef, useEffect } from 'react';
import Overlay from '../components/overlay';



function Playground(){
    const backgroundVideoRef = useRef(null);
    const mainVideoRef = useRef(null);

    const startCamera = () => {
        navigator.mediaDevices.getUserMedia({video:true})
            .then((stream) => {
                if(mainVideoRef.current && backgroundVideoRef.current){
                    backgroundVideoRef.current.srcObject = stream;
                    mainVideoRef.current.srcObject = stream;
                }
            })
            .catch((error) =>{
                console.error("Error accessing the Webcam");
            });
    };

    useEffect(() => {
        startCamera()
    }, []);


    return (
        <div className='playground-content'>
            
            <video 
                ref={backgroundVideoRef}
                autoPlay
                muted
                className="background-camera"
            />
            <Overlay />
            <video 
                ref={mainVideoRef}
                autoPlay
                muted
                className="main-camera"
            /> 

        </div>
    )
}


export default Playground;