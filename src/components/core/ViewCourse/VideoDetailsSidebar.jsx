import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import IconBtn from "../../Common/IconBtn.jsx";

export default function VideoDetailsSidebar({ setReviewModal, setIsSidebarOpen, isSidebarOpen }) {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  useEffect(() => {
    if (!courseSectionData.length) return;
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const currentSubSectionIndx = courseSectionData[currentSectionIndx]?.subSection.findIndex(
      (data) => data._id === subSectionId
    );
    const activeSubSectionId =
      courseSectionData[currentSectionIndx]?.subSection[currentSubSectionIndx]?._id;
    setActiveStatus(courseSectionData[currentSectionIndx]?._id);
    setVideoBarActive(activeSubSectionId);
  }, [courseSectionData, courseEntireData, location.pathname]);

  return (
    <div className="flex h-screen w-full max-w-[350px] flex-col pt-6 bg-[#f6f6f8] font-sans text-[#140202] shadow-lg md:w-[320px] lg:w-[350px]">
      <div className="mx-4 flex flex-col gap-3 border-b border-gray-300 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(`/dashboard/enrolled-courses`)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[tomato] text-[white]  hover:scale-90 transition-transform"
            title="Back"
          >
            <IoIosArrowBack size={24} />
          </button>
          <IconBtn text="Add Review" onclick={() => setReviewModal(true)} />
        </div>

        <div>
          <p className="text-lg font-semibold">{courseEntireData?.courseName}</p>
          <p className="text-sm font-medium text-[gray]">
            {completedLectures?.length} / {totalNoOfLectures} Lectures Completed
          </p>
        </div>
      </div>

      {/* Course Sections */}
      <div className="h-full overflow-y-auto px-4">
        {courseSectionData.map((course, index) => (
          <div key={index} className="mt-2">
            {/* Section */}
            <button
              className="flex w-full items-center justify-between uppercase text-[white] font-normal bg-[#e4e3e3] px-4 py-3 rounded-lg"
              onClick={() => setActiveStatus(activeStatus === course._id ? "" : course._id)}
            >
              <span className="w-[80%] font-semibold text-left">{course?.sectionName}</span>
              <BsChevronDown
                className={`transition-transform duration-300 ${activeStatus === course._id ? "rotate-180" : "rotate-0"
                  }`}
              />
            </button>

            {/* Sub Sections */}
            {activeStatus === course._id && (
              <div className="mt-2 space-y-2 transition-all duration-500">
                {course.subSection.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      navigate(
                        `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                      );
                      setVideoBarActive(topic._id);
                      setIsSidebarOpen(!isSidebarOpen)
                    }}
                    className={`flex w-full items-center gap-3 uppercase rounded-lg px-4 py-2 text-left transition-all ${videoBarActive === topic._id
                      ? "bg-[tomato] font-semibold text-[whitesmoke]"
                      : "hover:bg-[gray]"
                      }`}
                  >
                    <input type="checkbox" checked={completedLectures.includes(topic?._id)} readOnly />
                    {topic.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
