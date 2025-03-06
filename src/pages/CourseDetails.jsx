import React, { useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationModal from "../components/Common/ConfirmationModal.jsx";
import Footer from "../components/Common/Footer.jsx";
import RatingStars from "../components/Common/RatingStars.jsx";
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar.jsx";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard.jsx";
import { formatDate } from "../services/formatDate.js";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI.js";
import { BuyCourse } from "../services/operations/studentFeaturesAPI.js";
import GetAvgRating from "../utils/avgRating.js";
import Error from "./Error.jsx";

function CourseDetails() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [response, setResponse] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCourseDetails(courseId);
        setResponse(res);
      } catch (error) {
        console.log("Could not fetch Course Details");
      }
    })();
  }, [courseId]);

  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews);
    setAvgReviewCount(count);
  }, [response]);

  const [isActive, setIsActive] = useState([]);
  const handleActive = (id) => {
    setIsActive(
      !isActive.includes(id)
        ? [...isActive, id]
        : isActive.filter((e) => e !== id)
    );
  };

  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    response?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [response]);

  if (loading || !response) {
    return (
      <div className="grid min-h-screen place-items-center bg-[whitesmoke]">
        <div className="spinner"></div>
      </div>
    );
  }
  if (!response.success) {
    return <Error />;
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnroled,
    createdAt,
  } = response.data?.courseDetails;

  const handleBuyCourse = () => {
    if (token) {
      BuyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  if (paymentLoading) {
    return (
      <div className="grid min-h-screen place-items-center bg-[whitesmoke]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>

      <div className="relative mt-[100px]  flex flex-col-reverse lg:flex-row place-content-center w-[95vw] mx-auto bg-white ">
        {/* Hero Section */}
        <div className="flex flex-col w-[95%] sm:w-[50%]">
          <div className="grid min-h-[450px] max-w-maxContentTab py-8 lg:py-0 xl:max-w-[810px]">


            {/* Course Details */}
            <div className="flex flex-col gap-4 text-lg text-black">
              <p className="text-4xl font-bold">{courseName}</p>
              <p className="text-gray-700">{courseDescription}</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-yellow-500">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews.length} reviews)`}</span>
                <span>{`${studentsEnroled.length} students enrolled`}</span>
              </div>
              <p className="text-lg">Created By {`${instructor.firstName} ${instructor.lastName}`}</p>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  <BiInfoCircle /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>


          </div>
          {/* Course Content */}
          <div className="w-[100%] sm:w-[80%]">
            <div className=" p-8 bg-white shadow-md rounded-lg">
              <p className="text-3xl font-semibold">What you'll learn</p>
              <div className="mt-5">
                <ReactMarkdown>{whatYouWillLearn}</ReactMarkdown>
              </div>
            </div>

            {/* Course Accordion */}
            <div className="py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>
          </div>

        </div>
        {/* Course Details Card (Laptop View) */}
        <div className="w-[95%]  sm:w-[50%]">
          <CourseDetailsCard
            course={response?.data?.courseDetails}
            setConfirmationModal={setConfirmationModal}
            handleBuyCourse={handleBuyCourse}
          />
        </div>
      </div>



      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}

export default CourseDetails;
