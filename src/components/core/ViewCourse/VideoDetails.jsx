import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "video-react/dist/video-react.css";
import { BigPlayButton, Player } from "video-react";

import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI.js";
import { updateCompletedLectures } from "../../../slices/viewCourseSlice.js";
import IconBtn from "../../Common/IconBtn.jsx";

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse);

  const [videoData, setVideoData] = useState([]);
  const [previewSource, setPreviewSource] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!courseSectionData.length) return;
      if (!courseId || !sectionId || !subSectionId) {
        navigate(`/dashboard/enrolled-courses`);
      } else {
        const filteredData = courseSectionData.find(
          (course) => course._id === sectionId
        );
        const filteredVideoData = filteredData?.subSection.find(
          (data) => data._id === subSectionId
        );
        setVideoData(filteredVideoData);
        setPreviewSource(courseEntireData.thumbnail);
        setVideoEnded(false);
      }
    })();
  }, [courseSectionData, courseEntireData, location.pathname]);

  const goToNextVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const currentSubSectionIndx = courseSectionData[currentSectionIndx].subSection.findIndex(
      (data) => data._id === subSectionId
    );
    const noOfSubsections = courseSectionData[currentSectionIndx].subSection.length;

    if (currentSubSectionIndx !== noOfSubsections - 1) {
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${courseSectionData[currentSectionIndx].subSection[currentSubSectionIndx + 1]._id}`
      );
    } else {
      navigate(
        `/view-course/${courseId}/section/${courseSectionData[currentSectionIndx + 1]._id}/sub-section/${courseSectionData[currentSectionIndx + 1].subSection[0]._id}`
      );
    }
  };

  const goToPrevVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );
    const currentSubSectionIndx = courseSectionData[currentSectionIndx].subSection.findIndex(
      (data) => data._id === subSectionId
    );

    if (currentSubSectionIndx !== 0) {
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${courseSectionData[currentSectionIndx].subSection[currentSubSectionIndx - 1]._id}`
      );
    } else {
      const prevSectionIndx = currentSectionIndx - 1;
      const prevSubSectionLength = courseSectionData[prevSectionIndx].subSection.length;
      navigate(
        `/view-course/${courseId}/section/${courseSectionData[prevSectionIndx]._id}/sub-section/${courseSectionData[prevSectionIndx].subSection[prevSubSectionLength - 1]._id}`
      );
    }
  };

  const handleLectureCompletion = async () => {
    setLoading(true);
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    );
    if (res) {
      dispatch(updateCompletedLectures(subSectionId));
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-5 bg-[whitesmoke] p-3 mt-5 md:mt-0 md:p-6 lg:p-8 text-[black]">
      {!videoData ? (
        <img
          src={previewSource}
          alt="Preview"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
      ) : (
        <div className="w-full max-w-4xl">
          <Player
            ref={playerRef}
            aspectRatio="16:9"
            playsInline
            onEnded={() => setVideoEnded(true)}
            src={videoData?.videoUrl}
            className="rounded-lg shadow-lg"
          >
            <BigPlayButton position="center" />
            {videoEnded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50">
                {!completedLectures.includes(subSectionId) && (
                  <IconBtn
                    disabled={loading}
                    onclick={handleLectureCompletion}
                    text={!loading ? "Mark As Completed" : "Loading..."}
                    customClasses="text-lg px-4 py-2 mt-2"
                  />
                )}
                <IconBtn
                  disabled={loading}
                  onclick={() => {
                    if (playerRef?.current) {
                      playerRef?.current?.seek(0);
                      setVideoEnded(false);
                    }
                  }}
                  text="Rewatch"
                  customClasses="text-lg px-4 py-2 mt-2"
                />
                <div className="mt-4 flex gap-x-4">
                  <button
                    disabled={loading}
                    onClick={goToPrevVideo}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white"
                  >
                    Prev
                  </button>
                  <button
                    disabled={loading}
                    onClick={goToNextVideo}
                    className="px-4 py-2 rounded-lg bg-gray-800 text-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </Player>
        </div>
      )}

      <h1 className="mt-4 text-xl uppercase bg-[#E4E3E3] p-3 rounded-2xl text-[whitesmoke] font-semibold md:text-2xl lg:text-3xl text-center">{videoData?.title}</h1>
      <p className="pt-2 pb-6 text-center text-[#080201] font-black text-sm md:text-base">{videoData?.description}</p>
    </div>
  );
};

export default VideoDetails;
