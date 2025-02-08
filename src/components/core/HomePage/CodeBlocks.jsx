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
    <div className="flex flex-col md:flex-row items-center pt-[50px] md:pt-[100px] px-6 md:px-12">
      {/* Section 1 */}
      <div className="w-full md:w-[40vw] text-center md:text-left">
        {/* Heading */}
        <h1 className="text-[32px] sm:text-[40px] md:text-[54px] font-sans font-black leading-tight text-white">
          {heading}
        </h1>

        {/* Subheading */}
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-edu-sa font-thin text-white mt-2">
          {subheading}
        </h2>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 mt-6 justify-center md:justify-start">
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
      <div className="w-[90%] sm:w-[70%] md:w-[60vw] lg:w-[30vw] flex flex-col items-center bg-whitesmoke shadow-lg shadow-black p-2 sm:p-4 mt-6 md:mt-0 h-[200px] sm:h-[250px] overflow-auto">

        {/* Code Block */}
        <div
          className="w-full flex flex-col text-[whitesmoke] gap-1 font-semibold font-sans pr-1"
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
