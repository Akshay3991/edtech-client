import React, { useEffect, useState } from "react";

const YouTubeVideos = () => {
    const [videos, setVideos] = useState([]);
    const API_KEY = "AIzaSyBhUVSglPuAa-XteurjJu1yqn2yG2i8Hcc"; // Replace with your actual API key
    // const CHANNEL_ID = "UC_x5XG1OV2P6uZZ5FSM9Ttw"; // Replace with your target channel ID

    useEffect(() => {
        const fetchVideos = async () => {
            const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet,id&order=date&maxResults=10`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {videos.map((video) => (
                <div key={video.id.videoId} style={{ border: "1px solid #ccc", padding: "10px" }}>
                    <h4>{video.snippet.title}</h4>
                    <iframe
                        width="100%"
                        height="200"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={video.snippet.title}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default YouTubeVideos;
