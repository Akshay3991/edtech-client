import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../slices/cartSlice.js";
import { ACCOUNT_TYPE } from "../../../utils/constants.js";

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { thumbnail: ThumbnailImage, price: CurrentPrice, _id: courseId } = course;

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.");
      return;
    }
    if (token) {
      dispatch(addToCart(course));
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  return (
    <div className="flex flex-col gap-5 rounded-lg mb-10 bg-[#fffdfd] shadow-lg shadow-black p-5 text-black w-full ">
      {/* Course Image */}

      <img
        src={ThumbnailImage}
        alt={course?.courseName}
        className="rounded-xl shadow-lg shadow-black"
      />

      {/* Course Price */}
      <div className="text-3xl font-semibold text-center">Rs. {CurrentPrice}</div>

      {/* Action Buttons */}
      <div className="flex flex-col w-full sm:w-[90%] mx-auto gap-4">
        <button
          className="bg-[green] text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-all"
          onClick={
            user && course?.studentsEnroled.includes(user?._id)
              ? () => navigate("/dashboard/enrolled-courses")
              : handleBuyCourse
          }
        >
          {user && course?.studentsEnroled.includes(user?._id) ? "Go To Course" : "Buy Now"}
        </button>

        {(!user || !course?.studentsEnroled.includes(user?._id)) && (
          <button
            onClick={handleAddToCart}
            className="bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-900 transition-all"
          >
            Add to Cart
          </button>
        )}
      </div>

      {/* Money-Back Guarantee */}
      <p className="text-center text-sm text-gray-600">30-Day Money-Back Guarantee</p>

      {/* Course Includes */}
      <div>
        <p className="my-2 text-lg font-semibold">This Course Includes:</p>
        <div className="flex flex-col gap-3 text-sm text-[grey]">
          {course?.instructions?.map((item, i) => (
            <p className="flex items-center gap-2" key={i}>
              <BsFillCaretRightFill className="text-yellow-500" />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Share Button */}
      <button className="flex items-center justify-center gap-2 text-yellow-600 hover:text-yellow-800 transition-all" onClick={handleShare}>
        <FaShareSquare size={15} /> Share
      </button>
    </div>
  );
}

export default CourseDetailsCard;
