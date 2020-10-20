import React from "react";

const SearchBar = ({ searchImages, searchTerm, setSearchTerm }) => {
    return (
        <form className="Infinitely-form" onSubmit={searchImages}>
            <input
                type="text"
                placeholder="Search Unsplash..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>Search</button>
        </form>
    );
};

export default SearchBar;
