import * as React from 'react';
import {useEffect, useRef, useState} from "react";
import Icon from "@mdi/react";
import {mdiCameraEnhance, mdiCameraFlipOutline, mdiTrashCanOutline} from "@mdi/js";
import {Camera} from "react-camera-pro";

const MobilePage = () => {

    const [images, setImage] = useState(Array.from({length: 0}, (_, index) => images));
    const scrollableDivRef = useRef(null);
    const cameraRef = useRef(null);

    const handleTakePhoto = async () => {
        if (images.length < 10) {
            if (cameraRef.current) {
                const photo = cameraRef.current.takePhoto();
                setImage([...images, photo]);
            }
        } else {
            alert("تعداد عکس ها به حد نصاب رسیده است!")
        }
    };

    const handleDeletePhoto = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImage(newImages);
    };


    useEffect(() => {
        if (scrollableDivRef.current) {
            const lastItem = scrollableDivRef.current.lastChild;
            if (lastItem) {
                lastItem.scrollIntoView({behavior: 'smooth', block: 'end'});
            }
        }
    }, [images]);


    return (
        <div>
            <div className={"camera-placeholder-active"}>
                <Camera ref={cameraRef} aspectRatio={300 / 504} errorMessages={{}} facingMode="environment"/>
            </div>
            <button onClick={handleTakePhoto}
                    className={images.length < 10 ? "camera-button" : "camera-button-inactive"}>
                <Icon color={images.length < 10 ? "red" : "gray"} path={mdiCameraEnhance} size={1}/>
            </button>
            <button className={"camera-button"}
                    onClick={() => {
                        cameraRef.current.switchCamera();
                    }}>
                <Icon color={"red"} path={mdiCameraFlipOutline} size={1}/>
            </button>
            <div ref={scrollableDivRef} className={"captured-gallery"}>
                {images.map((image, index) => (
                    <div key={index}>
                        <button onClick={() => {
                            handleDeletePhoto(index);
                        }}><Icon color={"red"} path={mdiTrashCanOutline} size={0.7}/></button>
                        <img src={image} alt={`image ${index}`}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobilePage;