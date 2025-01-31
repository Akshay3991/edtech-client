// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { HiLightBulb } from "react-icons/hi";
import { useState } from "react";

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"

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
    <div className="flex-col">
      <div className="relative w-[100vw] h-[810px]">
        <div className="bg-[whitesmoke] absolute z-0 w-[100%] h-[450px]"></div>
        <div className="bg-[#014A32] absolute z-0 top-[450px] w-[100%] h-[360px]">

        </div>
        <div className="absolute z-5 top-[80px] w-[100%] h-[700px]">
          <div className="relative w-[100%] h-[100%] ">

            <video
              className={` shadow-lg absolute z-0 w-[95%] left-[35px] shadow-[#130e0e] ${isDarkMode ? "brightness-120" : "brightness-50"}`}
              muted
              loop
              autoPlay
            >
              <source src={Banner} type="video/mp4" />
            </video>

            <button
              className="absolute z-5 top-[0px] left-[35px]"
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
      <div className="w-[100vw] h-[600px] bg-[#014A32]">
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
      <div className="w-[100vw] h-[600px] bg-cover bg_img relative" >

        <ExploreMore />
      </div>
      <div className="mx-auto bg-[#FDFDFD]  flex  w-[100vw] flex-col items-center justify-between gap-8 ">
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

      <Footer />





      {/* Section 3 */}

      {/* Become a instructor section */}
      {/* Become a Instructor Button */}
      {/* <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link> */}
      {/* <InstructorSection /> */}

      {/* Reviws from Other Learner */}
      {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1> */}
      {/* <ReviewSlider /> */}

    </div>
  )
}

export default Home
