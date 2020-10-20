import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Infinitely.css";
import DisplayImages from "./DisplayImages";
import SearchBar from "./SearchBar";

const unsplashUrl = "https://api.unsplash.com";

const Infinitely = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch when the page first loads
    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line
    }, [page]);

    const fetchImages = async () => {
        try {
            const { data } = await axios.get(`${unsplashUrl}/photos`, {
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
                },
                params: {
                    page,
                    per_page: 30,
                },
            });
            setImages((previousImages) => [...previousImages, ...data]);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(images);

    // Perform user search
    const searchImages = async (e) => {
        e.preventDefault();
        setPage(1);
        try {
            const response = await axios.get(`${unsplashUrl}/search/photos`, {
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
                },
                params: {
                    query: searchTerm,
                    page,
                    per_page: 30,
                },
            });
            console.log(response);
            // setImages(data);
            // setPage((previousPage) => previousPage + 1);
        } catch (error) {
            console.log(error);
        }
    };

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

            <SearchBar
                searchImages={searchImages}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            {/* <form className="Infinitely-form" onSubmit={searchImages}>
                <input
                    type="text"
                    placeholder="Search Unsplash..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button>Search</button>
            </form> */}

            <DisplayImages
                images={images}
                setPage={setPage}
                previousPage={page}
            />
        </div>
    );
};

export default Infinitely;
