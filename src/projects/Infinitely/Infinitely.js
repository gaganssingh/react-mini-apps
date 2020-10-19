import React, { useEffect } from "react";
import axios from "axios";

import "./Infinitely.css";

const Infinitely = () => {
    useEffect(() => {
        const unsplashUrl = "https://api.unsplash.com/photos";
        try {
            const fetchImages = async () => {
                const { data } = await axios.get(unsplashUrl, {
                    headers: {
                        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
                    },
                });
                console.log(data);
            };

            fetchImages();
        } catch (error) {
            console.log(error);
        }
    }, []);

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
                {[...Array(100)].map((_, index) => (
                    <div className="Infinitely-image" key={index}>
                        <img
                            src="https://placekitten.com/g/1920/1080"
                            alt="Sample"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Infinitely;
