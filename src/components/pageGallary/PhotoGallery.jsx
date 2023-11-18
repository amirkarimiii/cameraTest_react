import React from 'react';

const PhotoGallery = ({ photos }) => {
    return (
        <div>
            <h2>Captured Photos</h2>
            {photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Captured ${index + 1}`} style={{ maxWidth: '200px', margin: '10px' }} />
            ))}
        </div>
    );
};

export default PhotoGallery;
