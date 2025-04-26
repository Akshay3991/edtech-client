import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { useNavigate } from "react-router-dom";
const API_KEY = process.env.API_KEY; // Replace with your API key

// const categories = [
//     { label: "Web Development", color: "#105f3e" },
//     { label: "Photography", color: "#FEA116" },
//     { label: "Graphics Design", color: "#3D64FF" },
//     { label: "Web Language", color: "#1CB5A3" },
//     { label: "Health & Fitness", color: "#3D64FF" },
//     { label: "Business Studies", color: "#9764DF" },
// ];

const TrendingCategories = () => {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

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

    const clearVideos = () => setVideos([]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            fetchVideos(searchQuery);
        }
    };

    return (
        <div className="w-full bg-[whitesmoke] min-h-screen pb-10">
            {/* 🔁 Navigation & Actions */}
            <div className="flex flex-wrap gap-2 bg-[white] justify-between items-center px-4 py-3 mt-[60px]">
                <div className="flex gap-2 text-[white]">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1 px-3 py-1 bg-[#0a0a0a] hover:bg-[gray] rounded-full text-sm"
                    >
                        <FaArrowCircleLeft className="w-4 h-4" />
                        Back
                    </button>
                    <button
                        onClick={() => navigate(1)}
                        className="flex items-center gap-1 px-3 py-1 bg-[#0d0d0d] hover:bg-[gray] rounded-full text-sm"
                    >
                        Forward
                        <FaArrowCircleRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex gap-2 text-[#f9f6f6]">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-1 px-3 py-1 bg-[grey] hover:bg-[#03030d] rounded-full text-sm"
                    >
                        <SiHomebridge className="w-4 h-4" />
                        Home
                    </button>
                    <button
                        onClick={clearVideos}
                        className="flex items-center gap-1 px-3 py-1 bg-[black] hover:bg-[grey] rounded-full text-sm"
                    >
                        Clear
                    </button>
                </div>
            </div>

            {/* 🔎 Search Bar */}
            <div className="w-[90%] mx-auto my-6">
                <form onSubmit={handleSearch} className="flex gap-2">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search videos..."
                        className="flex-1 p-2 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* 🔘 Categories */}
            {/* <div className="w-[90%] mx-auto gap-2 flex flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll custom-scrollbar">
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
            </div> */}

            {/* 🎥 Videos */}
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
