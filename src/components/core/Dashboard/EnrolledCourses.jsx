import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserEnrolledCourses } from "../../../services/operations/profileAPI.js";

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserEnrolledCourses(token);
        const filterPublishCourse = res.filter((ele) => ele.status !== "Draft");
        setEnrolledCourses(filterPublishCourse);
      } catch (error) {
        console.log("Could not fetch enrolled courses.");
      }
    })();
  }, [token]);

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Enrolled Courses
      </h2>

      {/* Loading State */}
      {!enrolledCourses ? (
        <div className="grid min-h-[50vh] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : enrolledCourses.length === 0 ? (
        <p className="grid h-[10vh] w-full place-content-center text-gray-700 text-center">
          You have not enrolled in any course yet.
        </p>
      ) : (
        <div className="my-8 text-gray-900">
          {/* Headings (Hidden on Mobile) */}
          <div className="hidden md:flex bg-gray-300 rounded-t-lg p-3 font-semibold">
            <p className="w-[50%] px-4">Course Name</p>
            <p className="w-[20%] px-4">Duration</p>
            <p className="w-[30%] px-4">Progress</p>
          </div>

          {/* Course List */}
          {enrolledCourses.map((course) => (
            <div
              className="flex flex-col md:flex-row items-center gap-4 bg-white shadow-md rounded-lg p-4 my-4 transition-transform hover:scale-[1.02] cursor-pointer"
              key={course._id}
              onClick={() =>
                navigate(
                  `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                )
              }
            >
              {/* Course Image */}
              <img
                src={course.thumbnail}
                alt="course_img"
                className="h-20 w-20 md:h-24 md:w-24 rounded-lg object-cover shadow-md shadow-black"
              />

              {/* Course Info */}
              <div className="flex-1">
                <p className="font-semibold text-lg">{course.courseName}</p>
                <p className="text-sm text-gray-600">
                  {course.courseDescription.length > 50
                    ? `${course.courseDescription.slice(0, 50)}...`
                    : course.courseDescription}
                </p>
              </div>

              {/* Duration (Visible in Tablet & Laptop) */}
              <p className="hidden md:block w-[20%] text-center">
                {course?.totalDuration}
              </p>

              {/* Progress Bar */}
              <div className="w-full md:w-[30%]">
                <p className="text-sm">Progress: {course.progressPercentage || 0}%</p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                  bgColor="#4caf50"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
