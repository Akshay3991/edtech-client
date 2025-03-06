import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../Common/RatingStars.jsx";
import GetAvgRating from "../../../utils/avgRating.js";

function Course_Card({ course, Height }) {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <Link to={`/courses/${course._id}`} className="w-full">
      <div className="bg-[whitesmoke] p-6 m-4 rounded-lg shadow-md shadow-black transition-transform transform hover:scale-105">
        {/* Course Thumbnail */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={course?.thumbnail}
            alt="Course Thumbnail"
            className={`${Height} w-full object-cover rounded-lg`}
          />
        </div>

        {/* Course Details */}
        <div className="flex flex-col gap-2 p-3">
          <p className="text-lg font-semibold text-black">{course?.courseName}</p>
          <p className="text-sm text-[grey]">
            {course?.instructor?.firstName} {course?.instructor?.lastName}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-[gray] text-sm">
              {course?.ratingAndReviews?.length} Ratings
            </span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-black">Rs. {course?.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Course_Card;
