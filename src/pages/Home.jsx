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
  const newsContainerRef = useRef(null); // Reference to the scrolling container
  const scrollSpeed = 1; // Adjust scroll speed (pixels per frame)

  useEffect(() => {
    const newsContainer = newsContainerRef.current;
    let scrollAmount = 0;
    let animationFrameId;

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
        behavior: "auto",
      });

      // Request the next frame
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scrolling
    autoScroll();

    // Cleanup: Cancel the animation frame when the component unmounts
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  return (
    <div className="flex-col">
      <div className="w-full relative h-[40rem] sm:h-[45rem] md:h-[50rem] lg:h-[55rem]">
        {/* Background Divs */}
        <div className="bg-[whitesmoke] absolute z-0 w-full h-[50%]"></div>
        <div className="bg-[#014A32] absolute z-0 top-[50%] w-full h-[50%]"></div>

        {/* Main Content Container */}
        <div className="absolute z-5 top-[5%] left-[5%] w-[90%] h-[90%]">
          <div className="relative w-full h-full m-auto">

            {/* Video */}
            <video
              className={`shadow-xl w-full h-full object-cover z-0 absolute shadow-[#130e0e] 
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
        md:top-[25%] md:left-[10%] ${isDarkMode ? "text-black" : "text-whitesmoke"}`}
            >
              <h1 className="text-[1.8rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.3rem] font-inter font-bold leading-tight">
                Convenient & Easy Way to Learn New Skills!
              </h1>
              <p className="text-[0.9rem] sm:text-[1.1rem] md:text-[1.3rem] font-mono mt-4">
                Learn from <b>EducationMart</b> by following our proven strategies to gain the best skills for your present and future career.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[40rem] sm:h-[47rem] md:h-[50rem] bg-[#014A32] flex items-center justify-center p-4">
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

      <div className="w-screen h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] bg-cover bg-center md:bg-fixed bg_img relative">
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

      <div onClick={toggleBright}
        className={`w-[100vw] h-[50rem] realtive bg-[grey] ${isDarkMode ? "brightness-120" : "brightness-50"}`}>
        <img src={Discoverimg} className={`absolute z-0 w-[100%]   h-[50rem]`} alt="" />
        <div className="absolute z-5 w-[100%] h-[50rem] ">
          <button
            className="" >
            <HiLightBulb className={`text-[54px] ${isDarkMode ? "text-[yellow] text-[68px]" : "text-[whitesmoke]"}`} />
          </button>
          <div className={`absolute w-[24.5vw] left-[200px] top-[0px] h-[34vh] shadow-lg shadow-[#6B6D6E] rounded-[20px] border-[10px] border-[#6B6D6E] bg-[#8F979E] ${isDarkMode ? "block" : "hidden"}`}>
            <h1 className="text-[#FF1949] p-[3px] text-[24px] font-black underline font-sans">:>Discovery Mission</h1>
            <p className="text-[#626d83] font-edu-sa font-semibold p-[5px] ">At EducationMart, we strive to revolutionize the way students, educators, and institutions access and interact with educational content. By creating an inclusive and user-friendly platform, EducationMart aims to bridge the gap between learning resources and learners, empowering everyone to achieve their full potential. </p>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="w-[100vw]  bg-[whitesmoke] h-[150rem]">
        <h1 className="w-[40vw] ml-[200px] font-sans font-bold text-[40px] p-[30px_0px]">Browse Trending Categories</h1>
        <div className="w-[80vw] mx-auto flex space-x-4">
          <div className="w-[15rem]  h-[4rem] flex justify-center items-center rounded-[20px] bg-[#0EB582]">
            <h2 className="text-[white]  text-[23px] font-semibold font-sans">Web Development</h2>
          </div>
          <div className="w-[15rem] h-[4rem] p-[10px] flex justify-center items-center rounded-[20px] bg-[#FEA116]">
            <h2 className="text-[white] text-[23px] font-semibold font-sans">Photography</h2>
          </div>
          <div className="w-[15rem] h-[4rem] p-[10px] flex justify-center items-center rounded-[20px] bg-[#3D64FF]">
            <h2 className="text-[white] text-[23px] font-semibold font-sans">Graphics Design</h2>
          </div>
          <div className="w-[15rem] h-[4rem] p-[10px] flex justify-center items-center rounded-[20px] bg-[#1CB5A3]">
            <h2 className="text-[white] text-[23px] font-semibold font-sans">Web Language</h2>
          </div>
          <div className="w-[15rem] h-[4rem] p-[10px] flex justify-center items-center rounded-[20px] bg-[#3D64FF]">
            <h2 className="text-[white] text-[23px] font-semibold font-sans">Health & Fitness</h2>
          </div>
          <div className="w-[15rem] h-[4rem] p-[10px] flex justify-center items-center rounded-[20px] bg-[#9764DF]">
            <h2 className="text-[white] text-[23px] font-semibold font-sans">Buisness Studies</h2>
          </div>
        </div>

        <h1 className="mx-auto text-center mt-[50px] font-sans font-black text-[34px] p-[30px_0px]">Team Of Instructors</h1>
        <div className="flex justify-center space-x-8">
          <div className="relative group  w-[25rem] h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black">
            <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
              <img src={Discoverimg} className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out" alt="" />
              <div className="absolute text-[54px] bottom-[100px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out flex space-x-2">
                <a href="https://github.com/"> <FaGithubSquare className="" /></a>
                <a href="https://linkedin.com"><FaLinkedin className="text-[#36a5e6]" /></a>

              </div>
              <div className="absolute text-center  w-[100%]">
                <h1 className="font-sans font-bold text-[20px]">Akshay</h1>
                <h2 className="text-[#FF1949] text-[18px] font-semibold">Web Developer</h2>
              </div>

            </div>
          </div>
          <div className="relative group  w-[25rem] h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black">
            <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
              <img src={Discoverimg} className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out" alt="" />
              <div className="absolute text-[54px] bottom-[100px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                <a href="https://github.com/"> <FaGithubSquare className="" /></a>
                <a href="https://linkedin.com"><FaLinkedin className="text-[#36a5e6]" /></a>
              </div>
              <div className="absolute text-center  w-[100%]">
                <h1 className="font-sans font-bold text-[20px]">Akshay</h1>
                <h2 className="text-[#FF1949] text-[18px] font-semibold">Web Developer</h2>
              </div>
            </div>
          </div>
          <div className="relative group  w-[25rem] h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black">
            <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
              <img src={Discoverimg} className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out" alt="" />
              <div className="absolute text-[54px] bottom-[100px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                <a href="https://github.com/"> <FaGithubSquare className="" /></a>
                <a href="https://linkedin.com"><FaLinkedin className="text-[#36a5e6]" /></a>
              </div>
              <div className="absolute text-center  w-[100%]">
                <h1 className="font-sans font-bold text-[20px]">Akshay</h1>
                <h2 className="text-[#FF1949] text-[18px] font-semibold">Web Developer</h2>
              </div>
            </div>
          </div>

        </div>
        <br />
        <br />
        <br />
        <h1 className="font-bold text-[#FF1949] ml-[200px]">Explore News</h1>
        <h1 className="w-[40vw] ml-[200px] font-sans font-bold text-[40px]">Our Latest Insights</h1>
        <div ref={newsContainerRef}
          className="flex w-[100vw] custom-scrollbar overflow-x-auto space-x-4 p-4 bg-gray-100">
          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 1</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>

          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 2</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>

          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 4</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>
          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 4</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>
          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 4</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>
          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 4</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>
          <div className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold">News Title 4</h3>
            <p className="text-sm text-gray-600">This is a brief description of the news item.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">Read more</a>
          </div>

        </div>
        {/* Become a instructor section */}
        <InstructorSection />
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default Home 