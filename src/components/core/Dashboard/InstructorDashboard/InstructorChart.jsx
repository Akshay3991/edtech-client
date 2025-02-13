import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(...registerables);

export default function InstructorChart({ courses }) {
  const [currChart, setCurrChart] = useState("students");

  // Function to generate random colors
  const generateRandomColors = (numColors) => {
    return Array.from({ length: numColors }, () =>
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    );
  };

  // Student Chart Data
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  };

  // Income Chart Data
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  };

  const options = { maintainAspectRatio: false };

  return (
    <div className="flex flex-col items-center gap-y-4 rounded-md bg-gray-100 shadow-lg hover:shadow-xl p-6 w-full max-w-3xl mx-auto">
      <p className="text-lg font-bold text-gray-900">Visualize</p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setCurrChart("students")}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${currChart === "students"
            ? "bg-gray-700 text-white"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
        >
          Students
        </button>
        <button
          onClick={() => setCurrChart("income")}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${currChart === "income"
            ? "bg-gray-700 text-white"
            : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
        >
          Income
        </button>
      </div>

      {/* Chart Display */}
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
        <Pie data={currChart === "students" ? chartDataStudents : chartIncomeData} options={options} />
      </div>
    </div>
  );
}
