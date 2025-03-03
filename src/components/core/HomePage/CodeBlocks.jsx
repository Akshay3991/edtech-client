import React from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
}) => {
  return (
    <div className="flex flex-col w-[90%] mx-auto gap-6 sm:gap-10 md:gap-10 lg-gap-12 md:flex-row ">
      {/* Section 1 */}
      <div className="w-full sm:w-[35vw] md:w-[40vw] lg:w-[50vw] text-left">
        {/* Heading */}
        <h1 className="text-[1.6rem] sm:text-[40px] md:text-[54px] font-sans font-black leading-tight text-white">
          {heading}
        </h1>

        {/* Subheading */}
        <h2 className="text-[0.6] sm:text-[20px] md:text-[24px] font-edu-sa font-thin text-white mt-2">
          {subheading}
        </h2>

        {/* Button Group */}
        <div className="flex  gap-4 sm:gap-7 mt-3 justify-start">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 (Code Block) */}
      <div className="w-full h-[50vh]  sm:w-[35vw] md:w-[35vw] lg:w-[35vw]  flex flex-col items-center bg-[whitesmoke] shadow-lg rounded-lg shadow-black ">

        {/* Code Block */}
        <div
          className="w-full h-full p-[10px] text-[black] text-[1rem] gap-1 font-normal font-sans pr-1"
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>

    </div>

  );
};

export default CodeBlocks;
