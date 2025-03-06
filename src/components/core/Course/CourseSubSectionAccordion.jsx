import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

function CourseSubSectionAccordion({ subSec }) {
  return (
    <div className="bg-[whitesmoke] shadow-lg shadow-black rounded-lg p-4 my-2">
      <div className="flex items-center gap-3">
        <HiOutlineVideoCamera className="text-xl text-[grey]" />
        <p className="text-lg font-medium text-[gray]">{subSec?.title}</p>
      </div>
    </div>
  );
}

export default CourseSubSectionAccordion;
