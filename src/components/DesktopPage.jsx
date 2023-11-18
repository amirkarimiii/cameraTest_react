import "./main.css"
import React, {useState} from "react";
import Icon from '@mdi/react';
import {mdiCameraEnhance, mdiCameraFlipOutline} from '@mdi/js';

const DesktopPage = () => {
    return (
        <div>
           <div className={"camera-placeholder-inactive"}>
               <p>لطفا با تلفن همراه <br/>وارد صفحه زیر شوید</p>
           </div>
            <button className={"camera-button"}>
                <Icon color={"red"} path={mdiCameraEnhance} size={1} />
            </button>
            <button className={"camera-button"}>
                <Icon color={"red"} path={mdiCameraFlipOutline} size={1} />
            </button>
        </div>
    );
}

export default DesktopPage;