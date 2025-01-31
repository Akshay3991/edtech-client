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
    <div className="flex-col w-[100vw] pt-[50px]">
      {/* Explore more section */}
      <div className="text-center ">
        <h1 className="text-[#FF1949] font-sans text-[54px] font-bold">
          Unlock the Power of Code
        </h1>
        <p className="font-black text-[black] text-[24px] ">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

      <div className="w-[80%] mx-auto rounded-[20px] p-[5px] bg-[white]">

        {/* Tabs Section */}
        <div className="flex rounded-[20px] bg-[whitesmoke]">
          {tabsName.map((ele, index) => {
            return (
              <div
                className={` text-[16px] flex flex-row items-center gap-2 ${currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 text-[20px] font-medium"
                  : "text-[black] font-bold font-sans"
                  } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
                key={index}
                onClick={() => setMyCards(ele)}
              >
                {ele}
              </div>
            );
          })}
        </div>


        {/* Cards Group */}
        <div className=" flex mt-[30px] w-[90%] gap-[20px] mx-auto ">
          {courses.map((ele, index) => {
            return (
              <CourseCard
                key={index}
                cardData={ele}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            );
          })}
        </div>

      </div>


    </div>
  );
};

export default ExploreMore;
