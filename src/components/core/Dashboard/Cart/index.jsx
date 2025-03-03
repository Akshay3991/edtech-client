import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses.jsx";
import RenderTotalAmount from "./RenderTotalAmount.jsx";

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart);
  const { paymentLoading } = useSelector((state) => state.course);

  if (paymentLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg shadow-black rounded-lg p-6">
        <h1 className="mb-6 text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Cart
        </h1>
        <p className="pb-2 text-lg font-semibold text-gray-600 border-b border-gray-300 text-center">
          {totalItems} {totalItems === 1 ? "Course" : "Courses"} in Cart
        </p>

        {total > 0 ? (
          <div className="mt-8 flex flex-col-reverse items-start gap-y-6 lg:flex-row lg:gap-x-10">
            <RenderCartCourses />
            <RenderTotalAmount />
          </div>
        ) : (
          <p className="mt-10 text-center text-xl text-gray-500">
            Your cart is empty 🛒
          </p>
        )}
      </div>
    </div>
  );
}
