import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";
import Course_Card from "./CourseCard.jsx";

function Course_Slider({ Courses }) {
  return (
    <div className="w-full bg-[#0a6433] p-4 rounded-lg">
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[FreeMode, Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Laptops
            1280: { slidesPerView: 4 }, // Large Screens
          }}
          className="w-full"
        >
          {Courses.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"250px"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-black text-center">No Courses Found</p>
      )}
    </div>
  );
}

export default Course_Slider;
