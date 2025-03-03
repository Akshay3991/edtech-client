import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { editCourseDetails } from "../../../../../services/operations/courseDetailsAPI.js";
import { resetCourseState, setStep } from "../../../../../slices/courseSlice.js";
import { COURSE_STATUS } from "../../../../../utils/constants.js";
import IconBtn from "../../../../Common/IconBtn.jsx";

export default function PublishCourse() {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { course } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true);
    }
  }, [course, setValue]);

  const goBack = () => {
    dispatch(setStep(2));
  };

  const goToCourses = () => {
    dispatch(resetCourseState());
    navigate("/dashboard/my-courses");
  };

  const handleCoursePublish = async () => {
    if (
      (course?.status === COURSE_STATUS.PUBLISHED &&
        getValues("public") === true) ||
      (course?.status === COURSE_STATUS.DRAFT && getValues("public") === false)
    ) {
      goToCourses();
      return;
    }

    const formData = new FormData();
    formData.append("courseId", course._id);
    const courseStatus = getValues("public")
      ? COURSE_STATUS.PUBLISHED
      : COURSE_STATUS.DRAFT;
    formData.append("status", courseStatus);

    setLoading(true);
    const result = await editCourseDetails(formData, token);
    if (result) {
      goToCourses();
    }
    setLoading(false);
  };

  const onSubmit = () => {
    handleCoursePublish();
  };

  return (
    <div className="w-full bg-whitesmoke p-6 rounded-lg shadow-lg">
      <p className="text-2xl font-semibold text-gray-900">Publish Settings</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {/* Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="public"
            {...register("public")}
            className="h-5 w-5 rounded border-gray-400 text-blue-600 focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="public" className="text-lg text-gray-700">
            Make this course public
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="w-full md:w-auto bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
          >
            Back
          </button>
          <IconBtn disabled={loading} text="Save Changes" />
        </div>
      </form>
    </div>
  );
}
