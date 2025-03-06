import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";

import { createRating } from "../../../services/operations/courseDetailsAPI.js";
import IconBtn from "../../Common/IconBtn.jsx";

export default function CourseReviewModal({ setReviewModal }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { courseEntireData } = useSelector((state) => state.viewCourse);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("courseExperience", "");
    setValue("courseRating", 0);
  }, [setValue]);

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating);
  };

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    );
    setReviewModal(false);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="w-11/12 max-w-[700px] rounded-lg bg-whitesmoke shadow-lg shadow-black p-6">
        {/* Modal Header */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900">Add Review</p>
          <button onClick={() => setReviewModal(false)}>
            <RxCross2 className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">
          <div className="flex items-center gap-x-4">
            <img
              src={user?.image}
              alt={user?.firstName + " profile"}
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-gray-600">Posting Publicly</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

            <div className="mt-4">
              <label className="text-sm text-gray-900" htmlFor="courseExperience">
                Add Your Experience <sup className="text-red-500">*</sup>
              </label>
              <textarea
                id="courseExperience"
                placeholder="Add Your Experience"
                {...register("courseExperience", { required: true })}
                className="mt-2 w-full min-h-[130px] p-3 rounded-md border border-gray-300 bg-white text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {errors.courseExperience && (
                <span className="ml-2 text-xs text-red-500">
                  Please Add Your Experience
                </span>
              )}
            </div>

            <div className="mt-6 flex justify-end gap-x-2">
              <button
                onClick={() => setReviewModal(false)}
                className="rounded-md bg-gray-300 py-2 px-4 text-gray-900"
              >
                Cancel
              </button>
              <IconBtn text="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
