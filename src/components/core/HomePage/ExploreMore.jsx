import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore.js";
import CourseCard from "./CourseCard.jsx";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div className="flex flex-col  w-[90%] mx-auto">
      {/* Explore more section */}
      <div className="text-center">
        <h1 className="text-[#FF1949] font-sans text-[1.6rem] sm:text-[3rem] md:text-[3.5rem] font-bold">
          Unlock the Power of Code
        </h1>
        <p className="font-black text-[black] text-[1rem] sm:text-[1.5rem] md:text-[1.8rem]">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

      <div className=" mt-[30px] mx-auto rounded-[20px] p-[5px] bg-[white]">
        {/* Tabs Section */}
        <div className="flex flex-wrap justify-center rounded-[20px] bg-[whitesmoke] p-2">
          {tabsName.map((ele, index) => (
            <div
              className={`text-[14px] sm:text-[16px] flex flex-row items-center gap-2 
            ${currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 text-[18px] sm:text-[20px] font-medium"
                  : "text-[black] font-bold font-sans"
                } 
            px-4 sm:px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          ))}
        </div>

        {/* Cards Group */}
        <div className="flex flex-wrap justify-center gap-5 mt-[20px] w-full">
          {courses.map((ele, index) => (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default ExploreMore;
