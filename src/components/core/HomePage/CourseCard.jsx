import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${currentCard === cardData?.heading
        ? "bg-white shadow-[12px_12px_0_0]  shadow-[black]"
        : "bg-[#014A32]"
        }  text-[whitesmoke]  h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className=" h-[80%] p-3 flex flex-col gap-3">
        <div
          className={` ${currentCard === cardData?.heading && "text-[black]"
            }`}
        >
          <h1 className="font-bold font-sans text-[20px]">
            {cardData?.heading}
          </h1>
          <p className="font-thin font-mono p-[12px]">{cardData?.description}</p>
        </div>

      </div>

      <div
        className={`flex justify-between text-[#FF1949] ${currentCard === cardData?.heading ? "" : ""
          } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
