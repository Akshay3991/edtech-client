import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button.jsx";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";

const InstructorSection = () => {
  return (
    <div className="flex flex-col w-[100vw] m-[100px_100px] lg:flex-row gap-20">
      <div className="w-[40%]">
        <img
          src={Instructor}
          alt=""
          className="shadow-white shadow-[-20px_-20px_0_0]"
        />
      </div>
      <div className="w-[60%] flex flex-col ">
        <h1 className="text-[54px] font-black font-sans">
          Become an Instructor
        </h1>

        <p className="m-[50px_0px] text-[20px] w-[70%] font-thin font-inter">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you
          love.
        </p>

        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex items-center gap-3">
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