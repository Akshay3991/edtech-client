// Icons Import
import { FaArrowRight, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";
import { HiLightBulb } from "react-icons/hi";
import { useRef, useEffect, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import Discoverimg from "../assets/Images/boxoffice.png"
// Component Imports
import Footer from "../components/Common/Footer.jsx"
import ReviewSlider from "../components/Common/ReviewSlider.jsx"
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx"
import ExploreMore from "../components/core/HomePage/ExploreMore.jsx"
import InstructorSection from "../components/core/HomePage/InstructorSection.jsx"
import TimelineSection from "../components/core/HomePage/Timeline.jsx"

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBright = () => {
    setIsDarkMode(!isDarkMode);

  };

  return (
    <div className="flex-col pt-[20px]">
      <div className="w-full relative h-[30rem] sm:h-[40rem] md:h-[50rem] lg:h-[55rem]">
        {/* Background Divs */}
        <div className="bg-[whitesmoke] absolute  z-0 w-full h-[50%]"></div>
        <div className="bg-[#014A32] absolute z-0 top-[50%] w-full h-[50%]"></div>

        {/* Main Content Container */}
        <div className="absolute z-5 top-[5%] left-[5%] w-[90%] h-[90%]  sm:w-[90%] sm:h-[90%] md:w-[90%] md:h-[90%] lg:w-[90%] lg:h-[90%]  ">
          <div className="relative w-full h-full m-auto">

            {/* Video */}
            <video
              className={`shadow-xl w-full h-full  object-fill sm:object-cover z-0 absolute shadow-[#130e0e] 
              ${isDarkMode ? "brightness-120" : "brightness-50"}`}
              muted
              loop
              autoPlay
            >
              <source src={Banner} type="video/mp4" />
            </video>

            {/* Toggle Brightness Button */}
            <button
              className="absolute z-5 top-[15px] left-[15px] p-2 bg-white/30 rounded-full"
              onClick={toggleBright}
            >
              {isDarkMode ? (
                <HiLightBulb className="text-2xl text-yellow-400" />
              ) : (
                <HiLightBulb className="text-2xl text-gray-700" />
              )}
            </button>

            {/* Text Content */}
            <div
              className={`absolute z-5 w-[90%] max-w-[500px] top-[15%] left-[5%] sm:top-[20%] sm:left-[8%] 
            md:top-[25%] md:left-[10%] ${isDarkMode ? "text-black" : "text-[whitesmoke]"}`}
            >
              <h1 className="text-[1.6rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.3rem] font-inter font-bold leading-tight">
                Convenient & Easy Way to Learn New Skills!
              </h1>
              <p className="text-[0.6rem] sm:text-[1.1rem] md:text-[1.3rem] font-mono mt-4">
                Learn from <b>EducationMart</b> by following our proven strategies to gain the best skills for your present and future career.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-[50px] pb-[40px] bg-[#014A32] flex ">
        <CodeBlocks
          heading="Unlock Your Coding Potential with Our Online Courses"
          subheading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/signup",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/signup",
            active: false,
          }}
          codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav>\n<a href="/one">One</a>\n<a href="/two">Two</a>\n<a href="/three">Three</a>\n</nav>\n</body>\n</html>`}
        />
      </div>

      <div className="w-full pt-[40px] pb-[40px]  bg-cover bg-center  bg_img ">
        <ExploreMore />
      </div>

      <div className="mx-auto bg-[#FDFDFD] flex flex-col items-center justify-between gap-8 w-full min-h-[50rem] px-4 sm:px-8 py-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row w-full md:w-[85vw] items-start gap-6">
          <h1 className="w-full md:w-[50%] text-[2rem] sm:text-[3rem] md:text-[3.5rem] text-start font-black leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem]">
            Get the skills you need for a job.
          </h1>
          <div className="w-full md:w-[50%]">
            <h3 className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] text-start font-edu-sa">
              The modern <i className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-mono">EducationMart</i> dictates its own terms. Today, to
              be a competitive specialist requires more than professional
              skills.
            </h3>
          </div>
        </div>

        {/* Timeline Section */}
        <TimelineSection />
      </div>


      <div className="w-full  bg-[whitesmoke]">
        <h1 className="text-center text-[1.4rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-sans font-black  p-[30px_0px]">Browse Trending Categories</h1>
        <div className="w-[90%] mx-auto gap-2 flex flex-col sm:flex-row md:flex-row lg:flex-row overflow-scroll custom-scrollbar">
          <div className="w-full h-full p-[8px]  rounded-[20px] bg-[#105f3e]">
            <h2 className="text-[white] text-[20px] font-bold text-center font-sans">Web Development</h2>
          </div>
          <div className="w-full  h-full p-[8px] rounded-[20px] bg-[#FEA116]">
            <h2 className="text-[white] text-[20px]  text-center font-bold font-sans">Photography</h2>
          </div>
          <div className="w-full h-full p-[8px]  rounded-[20px] bg-[#3D64FF]">
            <h2 className="text-[white] text-[20px] font-bold text-center  font-sans">Graphics Design</h2>
          </div>
          <div className="w-full h-full p-[8px]   rounded-[20px] bg-[#1CB5A3]">
            <h2 className="text-[white] text-[20px] font-bold  text-center font-sans">Web Language</h2>
          </div>
          <div className="w-full h-full p-[8px]  rounded-[20px] bg-[#3D64FF]">
            <h2 className="text-[white] text-[20px] font-bold  text-center font-sans">Health & Fitness</h2>
          </div>
          <div className="w-full h-full p-[8px]  rounded-[20px] bg-[#9764DF]">
            <h2 className="text-[white] text-[20px] font-bold  text-center font-sans">Business Studies</h2>
          </div>
        </div>

        <h1 className="text-center text-[1.4rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-sans font-black p-[30px_0px]">Team Of Developers</h1>
        <div className="flex justify-center space-x-3 sm:space-x-8">
          <div className="relative group w-[8rem] h-[8rem] sm:w-[18rem] sm:h-[18rem] md:w-[23rem] md:h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black">
            <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
              <img
                src={Discoverimg}
                className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out"
                alt=""
              />
              <div className="absolute text-[40px] bottom-[40px] sm:bottom-[80px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                <a href="https://github.com/">
                  <FaGithubSquare className="text-[24px] sm:text-[32px] md:text-[40px]" />
                </a>
                <a href="https://linkedin.com">
                  <FaLinkedin className="text-[#36a5e6] text-[24px] sm:text-[32px] md:text-[40px]" />
                </a>
              </div>
              <div className="absolute text-center w-[100%] bottom-[5px] sm:bottom-[8px]">
                <h1 className="font-sans font-black text-[10px] sm:text-[18px] md:text-[20px]">Akshay</h1>
                <h2 className="text-[#FF1949] text-[8px] sm:text-[16px] md:text-[18px] font-extrabold">Web Developer</h2>
              </div>
            </div>
          </div>

          <div className="relative group w-[8rem] h-[8rem] sm:w-[18rem] sm:h-[18rem] md:w-[23rem] md:h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black">
            <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
              <img
                src={Discoverimg}
                className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out"
                alt=""
              />
              <div className="absolute text-[40px] bottom-[40px] sm:bottom-[80px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                <a href="https://github.com/">
                  <FaGithubSquare className="text-[24px] sm:text-[32px] md:text-[40px]" />
                </a>
                <a href="https://linkedin.com">
                  <FaLinkedin className="text-[#36a5e6] text-[24px] sm:text-[32px] md:text-[40px]" />
                </a>
              </div>
              <div className="absolute text-center w-[100%] bottom-[5px] sm:bottom-[8px]">
                <h1 className="font-sans font-black text-[10px] sm:text-[18px] md:text-[20px]">Akshay</h1>
                <h2 className="text-[#FF1949] text-[8px] sm:text-[16px] md:text-[18px] font-extrabold">Web Developer</h2>
              </div>
            </div>
          </div>
          <div className="relative group w-[8rem] h-[8rem] sm:w-[18rem] sm:h-[18rem] md:w-[23rem] md:h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black">
            <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
              <img
                src={Discoverimg}
                className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out"
                alt=""
              />
              <div className="absolute text-[40px] bottom-[40px] sm:bottom-[80px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                <a href="https://github.com/">
                  <FaGithubSquare className="text-[24px] sm:text-[32px] md:text-[40px]" />
                </a>
                <a href="https://linkedin.com">
                  <FaLinkedin className="text-[#36a5e6] text-[24px] sm:text-[32px] md:text-[40px]" />
                </a>
              </div>
              <div className="absolute text-center w-[100%] bottom-[5px] sm:bottom-[8px]">
                <h1 className="font-sans font-black text-[10px] sm:text-[18px] md:text-[20px]">Akshay</h1>
                <h2 className="text-[#FF1949] text-[8px] sm:text-[16px] md:text-[18px] font-extrabold">Web Developer</h2>
              </div>
            </div>
          </div>

        </div>
        <br />
        <br />
        <br />
        <h1 className="font-black text-[#FF1949] ml-[40px] sm:ml-[200px] text-[0.8rem] sm:text-[1rem]">Explore News</h1>
        <h1 className="text-[1.4rem] ml-[40px] sm:ml-[200px] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[2.5rem] font-sans font-black ">Our Latest Insights</h1>
        <NewsComponent />
        {/* Become a instructor section */}
        <InstructorSection />
        {/* Reviws from Other Learner */}
        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-black font-sans text-center">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default Home


const NewsComponent = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const newsContainerRef = useRef(null); // Reference to the scrolling container
  const scrollSpeed = 1; // Adjust scroll speed (pixels per frame)
  let animationFrameId = useRef(null); // Store the animation frame ID for cleanup

  useEffect(() => {
    const newsContainer = newsContainerRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      // Increment the scroll amount
      scrollAmount += scrollSpeed;
      // If scrolled to the end, reset to the start
      if (scrollAmount >= newsContainer.scrollWidth - newsContainer.clientWidth) {
        scrollAmount = 0;
      }

      // Apply the scroll
      newsContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth", // Enable smooth scroll
      });

      // Request the next frame
      animationFrameId.current = requestAnimationFrame(autoScroll);
    };

    // Start auto-scrolling
    autoScroll();

    // Cleanup: Cancel the animation frame when the component unmounts
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Function to stop auto-scrolling and highlight the clicked item
  const handleNewsClick = (index) => {
    // Stop the auto-scrolling
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    // Highlight the clicked news box
    setHighlightedIndex(index);
  };

  return (
    <div
      ref={newsContainerRef}
      className="flex w-[100vw] custom-scrollbar overflow-x-auto space-x-4 p-4 bg-gray-100"
    >
      {["News Title 1", "News Title 2", "News Title 3", "News Title 4", "News Title 5", "News Title 6", "News Title 7"].map(
        (title, index) => (
          <div
            key={index}
            onClick={() => handleNewsClick(index)}
            className={`flex-shrink-0 w-full sm:w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4 transition duration-300 ${highlightedIndex === index ? "bg-yellow-200 border-2 border-blue-500" : ""
              }`} // Highlight the clicked news box
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
              Read more
            </a>
          </div>
        )
      )}
    </div>
  );
};

