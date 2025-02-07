// Icons Import
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiLightBulb } from "react-icons/hi";
import { useRef, useEffect, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
// Image and Video Import
import Banner from "../assets/Images/banner.mp4";
import Discoverimg from "../assets/Images/boxoffice.png";
// Component Imports
import Footer from "../components/Common/Footer.jsx";
import ReviewSlider from "../components/Common/ReviewSlider.jsx";
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx";
import ExploreMore from "../components/core/HomePage/ExploreMore.jsx";
import InstructorSection from "../components/core/HomePage/InstructorSection.jsx";
import TimelineSection from "../components/core/HomePage/Timeline.jsx";

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
      {/* Hero Section */}
      <div className="w-full relative h-[50rem] md:h-[40rem] sm:h-[30rem]">
        <div className="bg-[whitesmoke] absolute z-0 w-full h-[50%]"></div>
        <div className="bg-[#014A32] absolute z-0 top-[50%] w-full h-[50%]"></div>
        <div className="absolute z-5 top-[95px] left-[50px] w-[95%] h-[100%]">
          <div className="relative w-[95%] m-auto h-[90%]">
            <video
              className={`shadow-xl w-full h-full object-cover z-0 absolute shadow-[#130e0e] ${
                isDarkMode ? "brightness-120" : "brightness-50"
              }`}
              muted
              loop
              autoPlay
            >
              <source src={Banner} type="video/mp4" />
            </video>

            <button
              className="absolute z-5 top-[0px] left-[5px]"
              onClick={toggleBright}
            >
              {isDarkMode ? (
                <HiLightBulb className="text-xl text-[yellow]" />
              ) : (
                <HiLightBulb className="text-xl" />
              )}
            </button>
            <div
              className={`top-[200px] left-[100px] w-[500px] absolute z-5 ${
                isDarkMode ? "text-[black]" : "text-[whitesmoke]"
              } md:top-[150px] md:left-[50px] md:w-[400px] sm:top-[100px] sm:left-[20px] sm:w-[300px]`}
            >
              <h1 className="text-[54px] font-inter font-bold md:text-[40px] sm:text-[30px]">
                Convenient Easy Way of Learning New Skills!
              </h1>
              <p className="text-[24px] font-mono md:text-[18px] sm:text-[14px]">
                Learn from EducationMart online platform by following our proven ways to achieve the Best Skills for your present and future career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Section 1 */}
      <div className="w-full h-[35rem] bg-[#014A32] md:h-[30rem] sm:h-[25rem]">
        <CodeBlocks
          heading={"Unlock Your coding potential with our online courses"}
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

      {/* Explore More Section */}
      <div className="w-full h-[40rem] bg-cover bg_img relative md:h-[30rem] sm:h-[25rem]">
        <ExploreMore />
      </div>

      {/* Timeline Section */}
      <div className="mx-auto bg-[#FDFDFD] flex w-full h-[50rem] flex-col items-center justify-between gap-8 md:h-[40rem] sm:h-[35rem]">
        <div className="flex w-[85vw] m-auto mt-[50px] md:flex-col sm:flex-col">
          <h1 className="w-[50%] text-[54px] text-start font-black leading-[50px] md:w-full md:text-[40px] sm:w-full sm:text-[30px]">
            Get the skills you need for a job.
          </h1>
          <div className="w-[50%] md:w-full sm:w-full">
            <h3 className="text-[19px] text-start font-edu-sa md:text-[16px] sm:text-[14px]">
              The modern <i className="text-[21px] font-mono">EducationMart</i> dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
            </h3>
          </div>
        </div>
        <TimelineSection />
      </div>

      {/* Discovery Mission Section */}
      <div
        onClick={toggleBright}
        className={`w-full h-[50rem] relative bg-[grey] ${
          isDarkMode ? "brightness-120" : "brightness-50"
        } md:h-[40rem] sm:h-[30rem]`}
      >
        <img
          src={Discoverimg}
          className={`absolute z-0 w-full h-[50rem] md:h-[40rem] sm:h-[30rem]`}
          alt=""
        />
        <div className="absolute z-5 w-full h-[50rem] md:h-[40rem] sm:h-[30rem]">
          <button className="">
            <HiLightBulb
              className={`text-[54px] ${
                isDarkMode ? "text-[yellow] text-[68px]" : "text-[whitesmoke]"
              }`}
            />
          </button>
          <div
            className={`absolute w-[24.5vw] left-[200px] top-[0px] h-[34vh] shadow-lg shadow-[#6B6D6E] rounded-[20px] border-[10px] border-[#6B6D6E] bg-[#8F979E] ${
              isDarkMode ? "block" : "hidden"
            } md:w-[40vw] md:left-[50px] sm:w-[60vw] sm:left-[20px]`}
          >
            <h1 className="text-[#FF1949] p-[3px] text-[24px] font-black underline font-sans">
              :>Discovery Mission
            </h1>
            <p className="text-[#626d83] font-edu-sa font-semibold p-[5px]">
              At EducationMart, we strive to revolutionize the way students, educators, and institutions access and interact with educational content.
            </p>
          </div>
        </div>
      </div>

      {/* Trending Categories Section */}
      <div className="w-full bg-[whitesmoke] h-[150rem] md:h-[120rem] sm:h-[100rem]">
        <h1 className="w-[40vw] ml-[200px] font-sans font-bold text-[40px] p-[30px_0px] md:w-[60vw] md:ml-[50px] sm:w-[80vw] sm:ml-[20px] sm:text-[30px]">
          Browse Trending Categories
        </h1>
        <div className="w-[80vw] mx-auto flex space-x-4 md:flex-col md:space-x-0 md:space-y-4 sm:flex-col sm:space-x-0 sm:space-y-4">
          {["Web Development", "Photography", "Graphics Design", "Web Language", "Health & Fitness", "Business Studies"].map(
            (category, index) => (
              <div
                key={index}
                className="w-[15rem] h-[4rem] flex justify-center items-center rounded-[20px] bg-[#0EB582] md:w-full sm:w-full"
              >
                <h2 className="text-white text-[23px] font-semibold font-sans">
                  {category}
                </h2>
              </div>
            )
          )}
        </div>

        {/* Instructors Section */}
        <h1 className="mx-auto text-center mt-[50px] font-sans font-black text-[34px] p-[30px_0px]">
          Team Of Instructors
        </h1>
        <div className="flex justify-center space-x-8 md:flex-col md:space-x-0 md:space-y-8 sm:flex-col sm:space-x-0 sm:space-y-8">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="relative group w-[25rem] h-[23rem] overflow-visible flex rounded-[20px] bg-[whitesmoke] shadow-xl shadow-black md:w-full sm:w-full"
            >
              <div className="w-full h-full rounded-[20px] bg-[white] transform overflow-hidden group-hover:rotate-6 transition-all duration-300 ease-in-out relative">
                <img
                  src={Discoverimg}
                  className="w-[80%] h-[80%] mx-auto transform group-hover:translate-y-[-70px] transition-transform duration-300 ease-in-out"
                  alt=""
                />
                <div className="absolute text-[54px] bottom-[100px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex space-x-2">
                  <a href="https://github.com/">
                    <FaGithubSquare />
                  </a>
                  <a href="https://linkedin.com">
                    <FaLinkedin className="text-[#36a5e6]" />
                  </a>
                </div>
                <div className="absolute text-center w-full">
                  <h1 className="font-sans font-bold text-[20px]">Akshay</h1>
                  <h2 className="text-[#FF1949] text-[18px] font-semibold">
                    Web Developer
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* News Section */}
        <h1 className="font-bold text-[#FF1949] ml-[200px] md:ml-[50px] sm:ml-[20px]">
          Explore News
        </h1>
        <h1 className="w-[40vw] ml-[200px] font-sans font-bold text-[40px] md:w-[60vw] md:ml-[50px] sm:w-[80vw] sm:ml-[20px] sm:text-[30px]">
          Our Latest Insights
        </h1>
        <div
          ref={newsContainerRef}
          className="flex w-full custom-scrollbar overflow-x-auto space-x-4 p-4 bg-gray-100"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[25vw] h-[50vh] bg-white rounded-lg shadow-md p-4 md:w-[40vw] sm:w-[60vw]"
            >
              <h3 className="text-lg font-semibold">News Title {index + 1}</h3>
              <p className="text-sm text-gray-600">
                This is a brief description of the news item.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
                Read more
              </a>
            </div>
          ))}
        </div>

        {/* Instructor Section */}
        <InstructorSection />

        {/* Reviews Section */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
