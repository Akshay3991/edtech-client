import React, { useState } from "react";

const API_KEY = "YOUR_API_KEY"; // Replace with your actual YouTube API key

const categories = [
    { label: "Web Development", color: "#105f3e" },
    { label: "Photography", color: "#FEA116" },
    { label: "Graphics Design", color: "#3D64FF" },
    { label: "Web Language", color: "#1CB5A3" },
    { label: "Health & Fitness", color: "#3D64FF" },
    { label: "Business Studies", color: "#9764DF" },
];

const TrendingCategories = () => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async (query) => {
        const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${encodeURIComponent(
            query
        )}&part=snippet&type=video&maxResults=10`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setVideos(data.items || []);
        } catch (error) {
            console.error("Failed to fetch videos:", error);
        }
    };

    return (
        <div className="w-full bg-[whitesmoke]">
            <h1 className="text-center text-[1.4rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-sans font-black p-[30px_0px]">
                Browse Trending Categories
            </h1>

            <div className="w-[90%] mx-auto gap-2 flex flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll custom-scrollbar">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        onClick={() => fetchVideos(cat.label)}
                        className="w-full h-full p-[8px] rounded-[20px] cursor-pointer"
                        style={{ backgroundColor: cat.color }}
                    >
                        <h2 className="text-white text-[20px] font-bold text-center font-sans">
                            {cat.label}
                        </h2>
                    </div>
                ))}
            </div>

            {/* Video Grid */}
            <div className="w-[90%] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {videos.map((video) => (
                    <div key={video.id.videoId} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-[200px]"
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            allowFullScreen
                        ></iframe>
                        <div className="p-2">
                            <h4 className="text-sm font-semibold">{video.snippet.title}</h4>
                            <p className="text-xs text-gray-500">{video.snippet.channelTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCategories;
