import { useDispatch, useSelector } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import { formatDate } from "../../../../services/formatDate.js";
import { deleteCourse, fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI.js";
import { COURSE_STATUS } from "../../../../utils/constants.js";
import ConfirmationModal from "../../../Common/ConfirmationModal.jsx";

export default function CoursesTable({ courses, setCourses }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const TRUNCATE_LENGTH = 30;

  const handleCourseDelete = async (courseId) => {
    setLoading(true);
    await deleteCourse({ courseId: courseId }, token);
    const result = await fetchInstructorCourses(token);
    if (result) {
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  };

  return (
    <>
      <Table className="w-full bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <Thead className="hidden md:table-header-group bg-gray-200">
          <Tr>
            <Th className="p-4 text-left text-sm font-medium uppercase text-gray-700">Courses</Th>
            <Th className="p-4 text-left text-sm font-medium uppercase text-gray-700">Duration</Th>
            <Th className="p-4 text-left text-sm font-medium uppercase text-gray-700">Price</Th>
            <Th className="p-4 text-left text-sm font-medium uppercase text-gray-700">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {courses?.length === 0 ? (
            <Tr>
              <Td className="py-10 text-center text-2xl font-medium text-gray-700" colSpan="4">
                No courses found
              </Td>
            </Tr>
          ) : (
            courses?.map((course) => (
              <Tr key={course._id} className="border-b border-gray-300 flex flex-col md:table-row p-4">
                <Td className="flex flex-col md:flex-row md:items-center gap-4">
                  <img
                    src={course?.thumbnail}
                    alt={course?.courseName}
                    className="h-32 w-48 rounded-lg object-cover shadow-lg shadow-black"
                  />
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-900">{course.courseName}</p>
                    <p className="text-sm text-gray-600">
                      {course.courseDescription.length > TRUNCATE_LENGTH
                        ? course.courseDescription.slice(0, TRUNCATE_LENGTH) + "..."
                        : course.courseDescription}
                    </p>
                    <p className="text-xs text-gray-500">Created: {formatDate(course.createdAt)}</p>
                    {course.status === COURSE_STATUS.DRAFT ? (
                      <p className="flex items-center gap-2 rounded-full bg-gray-700 text-white px-2 py-1 text-xs w-fit">
                        <HiClock size={14} /> Drafted
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 rounded-full bg-green-600 text-white px-2 py-1 text-xs w-fit">
                        <FaCheck size={12} /> Published
                      </p>
                    )}
                  </div>
                </Td>
                <Td className="text-sm font-medium text-gray-800 text-center md:text-left">2hr 30min</Td>
                <Td className="text-sm font-medium text-gray-800 text-center md:text-left">₹{course.price}</Td>
                <Td className="flex gap-4 justify-center md:justify-start">
                  <button
                    disabled={loading}
                    onClick={() => navigate(`/dashboard/edit-course/${course._id}`)}
                    className="p-2 text-gray-600 hover:text-green-600 transition-all"
                  >
                    <FiEdit2 size={20} />
                  </button>
                  <button
                    disabled={loading}
                    onClick={() =>
                      setConfirmationModal({
                        text1: "Do you want to delete this course?",
                        text2: "All the data related to this course will be deleted",
                        btn1Text: !loading ? "Delete" : "Loading...",
                        btn2Text: "Cancel",
                        btn1Handler: !loading ? () => handleCourseDelete(course._id) : () => { },
                        btn2Handler: () => setConfirmationModal(null),
                      })
                    }
                    className="p-2 text-red-600 hover:text-red-800 transition-all"
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                </Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}
