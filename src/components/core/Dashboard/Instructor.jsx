import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI.js";
import { getInstructorData } from "../../../services/operations/profileAPI.js";
import InstructorChart from "./InstructorDashboard/InstructorChart.jsx";

export default function Instructor() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const [instructorData, setInstructorData] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const instructorApiData = await getInstructorData(token);
      const result = await fetchInstructorCourses(token);

      if (instructorApiData.length) setInstructorData(instructorApiData);
      if (result) setCourses(result);

      setLoading(false);
    })();
  }, [token]);

  const totalAmount = instructorData?.reduce(
    (acc, curr) => acc + curr.totalAmountGenerated,
    0
  );

  const totalStudents = instructorData?.reduce(
    (acc, curr) => acc + curr.totalStudentsEnrolled,
    0
  );

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      {/* Greeting */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Hi {user?.firstName} 👋
        </h1>
        <p className="font-medium text-gray-700">Let's start something new</p>
      </div>

      {loading ? (
        <div className="grid min-h-[50vh] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : courses.length > 0 ? (
        <div className="mt-6">
          {/* Chart & Stats */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Chart */}
            <div className="flex-1 bg-white shadow-md rounded-lg p-6">
              {totalAmount > 0 || totalStudents > 0 ? (
                <InstructorChart courses={instructorData} />
              ) : (
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-900">Visualize</p>
                  <p className="mt-4 text-xl font-medium text-gray-700">
                    Not Enough Data To Visualize
                  </p>
                </div>
              )}
            </div>

            {/* Statistics */}
            <div className="bg-white shadow-md rounded-lg p-6 min-w-[250px]">
              <p className="text-lg font-bold text-gray-900">Statistics</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-lg text-gray-600">Total Courses</p>
                  <p className="text-3xl font-semibold text-gray-900">
                    {courses.length}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-600">Total Students</p>
                  <p className="text-3xl font-semibold text-gray-900">
                    {totalStudents}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-600">Total Income</p>
                  <p className="text-3xl font-semibold text-gray-900">
                    Rs. {totalAmount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Courses Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mt-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold text-gray-900">Your Courses</p>
              <Link to="/dashboard/my-courses">
                <p className="text-xs font-semibold text-blue-600">View All</p>
              </Link>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <div key={course._id} className="bg-white rounded-lg p-4 shadow-md">
                  <img
                    src={course.thumbnail}
                    alt={course.courseName}
                    className="h-[200px] w-full rounded-md object-cover shadow-md shadow-black"
                  />
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-900">
                      {course.courseName}
                    </p>
                    <div className="mt-1 flex items-center space-x-2 text-gray-600 text-xs">
                      <p>{course.studentsEnroled.length} students</p>
                      <p>|</p>
                      <p>Rs. {course.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Empty State
        <div className="mt-20 bg-white shadow-md rounded-lg p-6 py-20 text-center">
          <p className="text-2xl font-bold text-gray-900">
            You have not created any courses yet
          </p>
          <Link to="/dashboard/add-course">
            <p className="mt-2 text-lg font-semibold text-blue-600">
              Create a course
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
