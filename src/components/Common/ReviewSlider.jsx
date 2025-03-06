import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { apiConnector } from "../../services/apiConnector.js";
import { ratingsEndpoints } from "../../services/apis.js";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );
      if (data?.success) {
        setReviews(data?.data);
      }
    })();
  }, []);

  return (
    <div className="w-full  p-4 shadow-md shadow-[#c2b4cc] sm:px-8 lg:px-16">
      <div className="my-3  mx-auto p-4 max-w-[90%] lg:max-w-[1200px] ">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
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
              <div className="flex flex-col gap-4 p-4 m-2 text-sm sm:text-base bg-[#fbfdfb] shadow-lg shadow-black rounded-lg">
                <div className="flex items-center gap-4">
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt="User"
                    className="h-12 w-12 rounded-full object-cover "
                  />
                  <div className="flex flex-col">
                    <h1 className="font-normal text-[black]">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                    <h2 className="text-xs sm:text-sm font-medium text-gray-600">
                      {review?.course?.courseName}
                    </h2>
                  </div>
                </div>
                <p className="font-medium text-[black] leading-relaxed">
                  {review?.review.split(" ").length > truncateWords
                    ? `${review?.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                    : review?.review}
                </p>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#b89e0b] text-lg">
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
  );
}

export default ReviewSlider;
