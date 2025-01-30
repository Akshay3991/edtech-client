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
import CTAButton from "../components/core/HomePage/Button.jsx"
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx"
import ExploreMore from "../components/core/HomePage/ExploreMore.jsx"
import InstructorSection from "../components/core/HomePage/InstructorSection.jsx"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection.jsx"
import TimelineSection from "../components/core/HomePage/Timeline.jsx"

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBright = () => {
    setIsDarkMode(!isDarkMode);

  };
  return (
    <section>
      <div className="relative w-[100vw]">
        <div className="bg-[whitesmoke] absolute z-0 w-[100%] h-[450px]"></div>
        <div className="bg-[#014A32] absolute z-0 top-[450px] w-[100%] h-[950px]"></div>
        {/* Video */}
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
      {/* Section 1 */}
      {/* <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white"> */}
      {/* Become a Instructor Button */}
      {/* <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link> */}

      {/* Heading */}
      {/* <div className="text-center text-4xl font-semibold">
          Empower Your Future with
        </div> */}

      {/* Sub Heading */}
      {/* <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div> */}

      {/* CTA Buttons */}
      {/* <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div> */}



      {/* Code Section 1  */}
      {/* <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                courses.
              </div>
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
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div> */}

      {/* Code Section 2 */}
      {/* <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div> */}

      {/* Explore Section */}
      {/* <ExploreMore /> */}
      {/* </div> */}

      {/* Section 2 */}
      {/* <div className="bg-pure-greys-5 text-richblack-700"> */}
      {/* <div className="homepage_bg h-[320px]">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div> */}

      {/* <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div> */}
      {/* </div> */}

      {/* Section 3 */}
      {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
      {/* Become a instructor section */}
      {/* <InstructorSection /> */}

      {/* Reviws from Other Learner */}
      {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1> */}
      {/* <ReviewSlider /> */}
      {/* </div> */}

      {/* Footer */}
      {/* <Footer /> */}
    </section>
  )
}

export default Home
