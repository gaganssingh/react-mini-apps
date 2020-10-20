import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Loading from "../../components/Loading/Loading";

const DisplayImages = ({ images, setPage, previousPage }) => {
    return (
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
    );
};

export default DisplayImages;
