import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BuyCourse } from "../../../../services/operations/studentFeaturesAPI.js";
import IconBtn from "../../../Common/IconBtn.jsx";

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    BuyCourse(token, courses, user, navigate, dispatch);
  };

  return (
    <div className="w-full max-w-sm rounded-lg bg-gray-100 p-6 shadow-lg">
      <p className="text-sm font-medium text-gray-500">Total Amount:</p>
      <p className="mb-6 text-3xl font-semibold text-gray-900">₹ {total}</p>
      <IconBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-all duration-200"
      />
    </div>
  );
}
