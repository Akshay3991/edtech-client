import { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import CourseSubSectionAccordion from "./CourseSubSectionAccordion.jsx";

export default function CourseAccordionBar({ course, isActive, handleActive }) {
  const contentEl = useRef(null);

  // Accordian state
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(isActive?.includes(course._id));
  }, [isActive]);

  const [sectionHeight, setSectionHeight] = useState(0);
  useEffect(() => {
    setSectionHeight(active ? contentEl.current.scrollHeight : 0);
  }, [active]);

  return (
    <div className="overflow-hidden bg-[#e61c1c] shadow-lg shadow-black text-black rounded-lg mb-4">
      <div>
        <div
          className="flex cursor-pointer items-start justify-between px-5 py-4 transition-all duration-300 bg-opacity-20"
          onClick={() => handleActive(course._id)}
        >
          <div className="flex items-center gap-3">
            <i className={`transition-transform duration-300 ${isActive.includes(course._id) ? "rotate-180" : "rotate-0"}`}>
              <AiOutlineDown />
            </i>
            <p className="font-semibold text-lg">{course?.sectionName}</p>
          </div>
          <div>
            <span className="text-gray-700">{`${course.subSection.length || 0} lecture(s)`}</span>
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className="relative h-0 overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{ height: sectionHeight }}
      >
        <div className="flex flex-col gap-3 px-5 py-4">
          {course?.subSection?.map((subSec, i) => (
            <CourseSubSectionAccordion subSec={subSec} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
