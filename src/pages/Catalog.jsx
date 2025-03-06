import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Common/Footer.jsx";
import CourseCard from "../components/core/Catalog/CourseCard.jsx";
import CourseSlider from "../components/core/Catalog/CourseSlider.jsx";
import { apiConnector } from "../services/apiConnector.js";
import { categories } from "../services/apis.js";
import { getCatalogPageData } from "../services/operations/pageAndComponntDatas.js";
import Error from "./Error.jsx";

function Catalog() {
  const { loading } = useSelector((state) => state.profile);
  const { catalogName } = useParams();
  const [active, setActive] = useState(1);
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  // Fetch Categories
  useEffect(() => {
    (async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        const category_id = res?.data?.data?.find(
          (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
        )?._id;
        setCategoryId(category_id);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
    })();
  }, [catalogName]);

  useEffect(() => {
    if (categoryId) {
      (async () => {
        try {
          const res = await getCatalogPageData(categoryId);
          setCatalogPageData(res);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [categoryId]);

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-screen place-items-center bg-[whitesmoke]">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!loading && !catalogPageData.success) {
    return <Error />;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-[whitesmoke] px-4">
        <div className="mx-auto flex min-h-[260px] max-w-7xl flex-col justify-center gap-4 py-8">
          <p className="text-sm text-gray-600">
            Home / Catalog /{" "}
            <span className="text-yellow-500">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>
          <h1 className="text-3xl font-bold text-black">
            {catalogPageData?.data?.selectedCategory?.name}
          </h1>
          <p className="max-w-2xl text-gray-700">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 - Courses to Get Started */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 bg-[whitesmoke]">
        <h2 className="text-2xl font-semibold text-black">
          Courses to Get You Started
        </h2>
        <div className="my-4 flex flex-wrap gap-4 text-sm">
          <button
            className={`px-4 py-2 rounded-md ${active === 1 ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setActive(1)}
          >
            Most Popular
          </button>
          <button
            className={`px-4 py-2 rounded-md ${active === 2 ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setActive(2)}
          >
            New
          </button>
        </div>
        <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses} />
      </div>

      {/* Section 2 - Top Courses */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 bg-[whitesmoke]">
        <h2 className="text-2xl font-semibold text-black">
          Top Courses in {catalogPageData?.data?.differentCategory?.name}
        </h2>
        <div className="py-8">
          <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses} />
        </div>
      </div>

      {/* Section 3 - Frequently Bought */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 bg-[whitesmoke]">
        <h2 className="text-2xl font-semibold text-black">Frequently Bought</h2>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {catalogPageData?.data?.mostSellingCourses
              ?.slice(0, 4)
              .map((course, i) => (
                <CourseCard course={course} key={i} Height="h-[400px]" />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Catalog;
