import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchCourseDetails,
  getFullDetailsOfCourse,
} from "../../../../services/operations/courseDetailsAPI.js";
import { setCourse, setEditCourse } from "../../../../slices/courseSlice.js";
import RenderSteps from "../AddCourse/RenderSteps.jsx";

export default function EditCourse() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const { course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const result = await getFullDetailsOfCourse(courseId, token);
      if (result?.courseDetails) {
        dispatch(setEditCourse(true));
        dispatch(setCourse(result?.courseDetails));
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg shadow-black rounded-lg p-6">
        <h1 className="mb-6 text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Edit Course
        </h1>
        <div className="w-full max-w-[600px] mx-auto">
          {course ? (
            <RenderSteps />
          ) : (
            <p className="mt-10 text-center text-xl font-semibold text-gray-600">
              Course not found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
