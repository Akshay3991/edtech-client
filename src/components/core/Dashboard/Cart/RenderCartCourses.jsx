import { FaStar } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../../slices/cartSlice.js";

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-1 flex-col bg-gray-100 p-6 rounded-lg shadow-lg">
      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No courses in cart</p>
      ) : (
        cart.map((course, indx) => (
          <div
            key={course._id}
            className={`flex flex-col md:flex-row items-center justify-between gap-6 ${indx !== cart.length - 1 && "border-b border-gray-300 pb-6"
              } ${indx !== 0 && "mt-6"} `}
          >
            {/* Course Image & Details */}
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <img
                src={course?.thumbnail}
                alt={course?.courseName}
                className="h-40 w-60 rounded-lg object-cover shadow-md shadow-black"
              />
              <div className="flex flex-col space-y-2 text-center md:text-left">
                <p className="text-xl font-semibold text-gray-900">
                  {course?.courseName}
                </p>
                <p className="text-sm text-gray-600">{course?.category?.name}</p>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  {/* <span className="text-yellow-500">4.5</span> */}
                  <ReactStars
                    count={5}
                    value={course?.ratingAndReviews?.length}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                  <span className="text-gray-500">
                    {course?.ratingAndReviews?.length} Ratings
                  </span>
                </div>
              </div>
            </div>

            {/* Price & Remove Button */}
            <div className="flex flex-col items-center md:items-end space-y-2">
              <button
                onClick={() => dispatch(removeFromCart(course._id))}
                className="flex items-center gap-x-1 rounded-md bg-red-500 hover:bg-red-600 py-2 px-4 text-white transition-all duration-200"
              >
                <RiDeleteBin6Line />
                <span>Remove</span>
              </button>
              <p className="text-2xl font-medium text-gray-800">
                ₹ {course?.price}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
