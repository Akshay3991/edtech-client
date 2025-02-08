import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button.jsx";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";

const InstructorSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full p-4 sm:p-8 lg:p-16 gap-10 lg:gap-20">
      {/* Left Side - Instructor Image */}
      <div className="w-full sm:w-[70%] lg:w-[40%] flex justify-center">
        <img
          src={Instructor}
          alt="Instructor"
          className="w-full max-w-[400px] lg:max-w-[500px] shadow-white shadow-[-20px_-20px_0_0] object-cover"
        />
      </div>

      {/* Right Side - Text & CTA */}
      <div className="w-full lg:w-[60%] flex flex-col text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black font-sans">
          Become an Instructor
        </h1>

        <p className="mt-6 sm:mt-10 text-lg sm:text-xl lg:text-2xl font-thin font-inter max-w-[90%] sm:max-w-[70%] mx-auto lg:mx-0">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you
          love.
        </p>

        <div className="mt-6 sm:mt-10">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-3 text-sm sm:text-base lg:text-lg">
              Start Teaching Today
              <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>

  )
}

export default InstructorSection