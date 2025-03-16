import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";


import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal.jsx";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar.jsx";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI.js";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice.js";

export default function ViewCourse() {
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [reviewModal, setReviewModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle

  useEffect(() => {
    (async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));

      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-3.5rem)] mt-[60px] bg-[tomato]">
        {/* Sidebar Toggle Button (Mobile & Tablet) */}
        <button
          className="absolute left-0 top-2 z-30 rounded-lg bg-[#0f0f0f] px-4 py-2 text-white shadow-md md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IoCloseCircleSharp /> : <MdMenuOpen />}
        </button>

        {/* Sidebar (Hidden on Mobile unless toggled) */}
        <div
          className={`absolute inset-y-0 left-0 z-20 w-[280px] bg-[whitesmoke] shadow-md transition-transform duration-300 md:relative md:translate-x-0 lg:w-[350px] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <VideoDetailsSidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} setReviewModal={setReviewModal} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>

      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </>
  );
}
