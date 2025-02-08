import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
  {
    Logo: Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company",
  },
  {
    Logo: Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority",
  },
  {
    Logo: Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills",
  },
  {
    Logo: Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  },
];


const TimelineSection = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 lg:gap-20 mb-16 items-center">
        {/* Left Side - Timeline Content */}
        <div className="w-full lg:w-[45%] flex flex-col gap-10 sm:gap-14 lg:gap-5">
          {TimeLine.map((ele, i) => (
            <div key={i} className="flex flex-col lg:gap-3">
              <div className="flex gap-4 sm:gap-6">
                {/* Icon */}
                <div className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-white rounded-full flex justify-center items-center shadow-md">
                  <img src={ele.Logo} alt="" className="w-[60%] h-[60%]" />
                </div>
                {/* Text */}
                <div>
                  <h2 className="font-semibold text-lg sm:text-xl">{ele.Heading}</h2>
                  <p className="text-sm sm:text-base">{ele.Description}</p>
                </div>
              </div>
              {/* Dotted Line */}
              {i !== TimeLine.length - 1 && (
                <div className="hidden lg:block h-14 border-dotted border-r border-richblack-100 w-[26px]"></div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Image + Stats */}
        <div className="relative w-fit h-auto shadow-blue-200 shadow-lg">
          {/* Stats Section */}
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex flex-col lg:flex-row text-white uppercase py-4 sm:py-5 lg:py-10 gap-4 lg:gap-0">
            {/* Years Experience */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-6 sm:px-10 lg:px-14">
              <h1 className="text-2xl sm:text-3xl font-bold">10</h1>
              <h1 className="text-caribbeangreen-300 text-xs sm:text-sm w-[75px]">
                Years experience
              </h1>
            </div>

            {/* Types of Courses */}
            <div className="flex gap-5 items-center px-6 sm:px-10 lg:px-14">
              <h1 className="text-2xl sm:text-3xl font-bold">250</h1>
              <h1 className="text-caribbeangreen-300 text-xs sm:text-sm w-[75px]">
                Types of courses
              </h1>
            </div>
          </div>

          {/* Timeline Image */}
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-lg object-cover w-full max-w-full h-auto"
          />
        </div>
      </div>
    </div>

  );
};

export default TimelineSection;
