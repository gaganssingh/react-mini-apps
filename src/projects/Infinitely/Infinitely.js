import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Infinitely.css";

const Infinitely = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const unsplashUrl = "https://api.unsplash.com/photos";
        try {
            const fetchImages = async () => {
                const { data } = await axios.get(unsplashUrl, {
                    headers: {
                        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
                    },
                    params: {
                        per_page: 30,
                    },
                });
                setImages(data);
            };

            fetchImages();
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log(images);

    // If Unsplash access key is not present, return error
    if (process.env.REACT_APP_UNSPLASH_API_KEY === undefined) {
        return (
            <div className="Infinitely-error">
                <h1> Unsplash Access Key Missing </h1>
                <h2>Please add your access key in the .env file</h2>
            </div>
        );
    }

    return (
        <div className="Infinitely">
            <h1>Unsplash Image Gallery!</h1>

            <form className="Infinitely-form">
                <input type="text" placeholder="Search Unsplash..." />
                <button>Search</button>
            </form>

            <div className="Infinitely-image-grid">
                {images.map((image) => (
                    <div className="Infinitely-image" key={image.id}>
                        <img
                            src={image.urls.regular}
                            alt={image.alt_description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Infinitely;
