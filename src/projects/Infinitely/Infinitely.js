import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import Loading from "../../components/Loading/Loading";
import "./Infinitely.css";

const unsplashUrl = "https://api.unsplash.com/photos";

const Infinitely = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchImages();
    }, [page]);

    const fetchImages = async () => {
        try {
            const { data } = await axios.get(unsplashUrl, {
                headers: {
                    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
                },
                params: {
                    per_page: 30,
                    page,
                },
            });
            setImages((previousImages) => [...previousImages, ...data]);

            console.log("page", page);
        } catch (error) {
            console.log(error);
        }
    };

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

            <InfiniteScroll
                dataLength={images.length}
                next={() => setPage((previousPage) => previousPage + 1)}
                hasMore={true}
                loader={<Loading />}
            >
                <div className="Infinitely-image-grid">
                    {images.map((image) => (
                        <a
                            className="Infinitely-image"
                            key={image.id}
                            href={image.links.html}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={image.urls.regular}
                                alt={image.alt_description}
                            />
                        </a>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Infinitely;
