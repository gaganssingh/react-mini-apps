const fetchImages = async () => {
    const { data } = await axios.get(unsplashUrl, {
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
        },
        params: {
            per_page: 30,
        },
    });

    return data;
};

export default fetchImages;
