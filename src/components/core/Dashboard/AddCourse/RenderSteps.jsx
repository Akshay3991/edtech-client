import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm.jsx";
import CourseInformationForm from "./CourseInformation/CourseInformationForm.jsx";
import PublishCourse from "./PublishCourse";

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course);

  const steps = [
    { id: 1, title: "Course Information" },
    { id: 2, title: "Course Builder" },
    { id: 3, title: "Publish" },
  ];

  return (
    <div className="w-full bg-whitesmoke p-6 rounded-lg shadow-lg">
      {/* Step Progress Bar */}
      <div className="relative mb-6 flex w-full justify-center items-center">
        {steps.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <button
                className={`grid aspect-square w-10 place-items-center rounded-full shadow-md transition-all duration-300 ${step === item.id
                  ? "bg-yellow-500 text-white"
                  : step > item.id
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-600"
                  }`}
              >
                {step > item.id ? <FaCheck className="font-bold" /> : item.id}
              </button>
            </div>
            {index !== steps.length - 1 && (
              <div
                className={`h-1 w-24 md:w-36 lg:w-48 transition-all duration-300 ${step > item.id ? "bg-green-500" : "bg-gray-400"
                  }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Titles */}
      <div className="relative mb-8 flex w-full select-none justify-between text-xs sm:text-sm text-center">
        {steps.map((item) => (
          <div key={item.id} className="min-w-[100px]">
            <p
              className={`${step >= item.id ? "text-gray-900 font-semibold" : "text-gray-500"
                }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Render Specific Component Based on Current Step */}
      <div className="mt-6">
        {step === 1 && <CourseInformationForm />}
        {step === 2 && <CourseBuilderForm />}
        {step === 3 && <PublishCourse />}
      </div>
    </div>
  );
}
