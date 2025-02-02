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
      <div className="w-[100vw] relative h-[50rem]">
        <div className="bg-[whitesmoke] absolute  z-0 w-[100%] h-[50%]"></div>
        <div className="bg-[#014A32] absolute  z-0 top-[50%]  w-[100%] h-[50%]"></div>
        <div className="absolute z-5 top-[95px] left-[50px] w-[95%] h-[100%] ">
          <div className="relative w-[95%] m-auto h-[90%] ">

            <video
              className={` shadow-xl w-full h-full object-cover z-0 absolute   shadow-[#130e0e] ${isDarkMode ? "brightness-120" : "brightness-50"}`}
              muted
              loop
              autoPlay
            >
              <source src={Banner} className="" type="video/mp4" />
            </video>

            <button
              className="absolute z-5 top-[0px] left-[5px]"
              onClick={toggleBright}>
              {isDarkMode ? (
                <HiLightBulb className="text-xl text-[yellow]" />
              ) : (
                <HiLightBulb className="text-xl " />
              )}
            </button>
            <div className={`top-[200px] left-[100px] w-[500px] absolute z-5 ${isDarkMode ? "text-[black]" : "text-[whitesmoke]"}`}>
              <h1 className="text-[54px] font-inter font-bold">Convenient Easy Way of Learning New Skills!</h1>
              <p className="text-[24px]  font-mono">Learn from EducationMart online platform by following our proven ways to achieve the Best Skills for your present and future career.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="w-[100vw] h-[35rem] bg-[#014A32]">
        {/* Code Section 1  */}
        <CodeBlocks
          heading={
            "Unlock Your coding potential with our online courses"
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
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
          codeColor={"text-[green]"}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
        />
      </div>
      <div className="w-[100vw] h-[40rem] bg-cover bg_img relative" >

        <ExploreMore />
      </div>
      <div className="mx-auto bg-[#FDFDFD]  flex  w-[100vw] h-[50rem] flex-col items-center justify-between gap-8 ">
        <div className="flex w-[85vw] m-auto mt-[50px]">
          <h1 className="w-[50%] text-[54px] text-start font-black leading-[50px]">
            Get the skills you need for a job.
          </h1>
          <div className="w-[50%]">
            <h3 className="text-[19px] text-start  font-edu-sa">
              The modern <i className="text-[21px] font-mono">EducationMart</i> dictates its own terms. Today, to
              be a competitive specialist requires more than professional
              skills.
            </h3>

          </div>
        </div>

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
        {/* <ReviewSlider /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
