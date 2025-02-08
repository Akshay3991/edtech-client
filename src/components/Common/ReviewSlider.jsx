import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiConnector.js"
import { ratingsEndpoints } from "../../services/apis.js"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15

  useEffect(() => {
    ; (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  // console.log(reviews)

  return (
    <div className="text-white w-full px-4 sm:px-8 lg:px-16">
      <div className="my-12 h-auto max-w-[90%] lg:max-w-[1200px] mx-auto">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Laptops
            1280: { slidesPerView: 4 }, // Large screens
          }}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-4 bg-richblack-800 p-4 text-sm sm:text-base text-richblack-25 rounded-lg">
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt="User"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                    <h2 className="text-xs sm:text-sm font-medium text-richblack-500">
                      {review?.course?.courseName}
                    </h2>
                  </div>
                </div>

                {/* Review Text */}
                <p className="font-medium text-richblack-25 leading-relaxed">
                  {review?.review.split(" ").length > truncateWords
                    ? `${review?.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                    : review?.review}
                </p>

                {/* Rating Section */}
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-yellow-100 text-lg">
                    {review.rating.toFixed(1)}
                  </h3>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={18}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  )
}

export default ReviewSlider
