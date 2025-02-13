import RenderSteps from "./RenderSteps.jsx";
import { useState } from "react";

export default function AddCourse() {
  const [showTips, setShowTips] = useState(false);

  return (
    <div className="w-full bg-whitesmoke p-6 rounded-lg shadow-lg">
      <h1 className="mb-8 text-2xl md:text-3xl font-semibold text-gray-900">
        Add Course
      </h1>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Course Creation Steps */}
        <div className="flex-1">
          <RenderSteps />
        </div>

        {/* Course Upload Tips - Collapsible on Mobile */}
        <div className="xl:block hidden sticky top-10 max-w-[400px] flex-1 bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4 text-lg font-semibold text-gray-900">⚡ Course Upload Tips</p>
          <ul className="list-disc space-y-4 text-sm text-gray-700 pl-5">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>Add Topics in the Course Builder for lessons, quizzes, and assignments.</li>
            <li>Information from Additional Data appears on the course page.</li>
            <li>Make Announcements for important updates.</li>
          </ul>
        </div>

        {/* Mobile Version of Course Upload Tips */}
        <div className="xl:hidden block">
          <button
            className="w-full bg-gray-900 text-white py-2 rounded-lg"
            onClick={() => setShowTips(!showTips)}
          >
            {showTips ? "Hide Tips ⬆️" : "Show Tips ⬇️"}
          </button>
          {showTips && (
            <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
              <p className="mb-2 text-lg font-semibold text-gray-900">⚡ Course Upload Tips</p>
              <ul className="list-disc space-y-2 text-sm text-gray-700 pl-5">
                <li>Set the Course Price option or make it free.</li>
                <li>Standard size for the course thumbnail is 1024x576.</li>
                <li>Video section controls the course overview video.</li>
                <li>Course Builder is where you create & organize a course.</li>
                <li>Add Topics in the Course Builder for lessons, quizzes, and assignments.</li>
                <li>Information from Additional Data appears on the course page.</li>
                <li>Make Announcements for important updates.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
