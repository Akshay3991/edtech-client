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
  codeColor,
}) => {
  return (
    <div className="flex pt-[100px]">
      {/* Section 1  */}
      <div className="w-[40vw] ml-[100px]">
        {/* heading */}
        <h1 className="text-[54px] font-sans font-black leading-[55px] text-[white]">
          {heading}
        </h1>

        {/* Sub Heading */}
        <h2 className="text-[24px] font-edu-sa font-thin text-[white]">
          {subheading}
        </h2>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
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

      {/* Section 2 */}
      <div className="flex ml-[200px] bg-[whitesmoke] shadow-lg shadow-black w-[30vw] mr-[100px] ">
        {/* Indexing */}
        <div className="text-center flex flex-col font-edu-sa  w-[10%] select-none  font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col text-[#014A32] gap-2 font-semibold font-sans ${codeColor} pr-1`}
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
