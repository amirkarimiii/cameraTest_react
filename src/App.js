import './App.css';
import React, { useRef, useState } from "react";
import {BrowserView, MobileView} from "react-device-detect";
import DesktopPage from "./components/DesktopPage";
import MobilePage from "./components/MobilePage";



function App() {

    const camera = useRef(null);
    const [image, setImage] = useState("");

    const capturePhoto = () => camera.current && setImage(camera.current.takePhoto());

    return (
        <div className="App">
            <BrowserView>
                <DesktopPage/>
            </BrowserView>
            <MobileView>
                <MobilePage/>
            </MobileView>
        </div>
    );
}

export default App;
