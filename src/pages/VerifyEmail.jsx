import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI.js";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { accountType, firstName, lastName, email, password, confirmPassword } = signupData;

    dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-whitesmoke px-4 py-10">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="w-full max-w-md p-6 rounded-lg bg-white shadow-lg">
          <h1 className="text-gray-900 text-2xl md:text-3xl font-semibold text-center">Verify Email</h1>
          <p className="text-gray-600 text-center mt-2">
            A verification code has been sent to your email. Enter the code below.
          </p>

          <form onSubmit={handleVerifyAndSignup} className="mt-6">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  className="w-10 h-10 md:w-12 md:h-12 border border-gray-300 rounded-md text-center text-lg font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              )}
              containerStyle="flex justify-center gap-2 md:gap-4"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-md mt-6 transition-all duration-200"
            >
              Verify Email
            </button>
          </form>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm">
            <Link to="/signup" className="flex items-center text-gray-700 hover:text-gray-900 transition-all">
              <BiArrowBack className="mr-1" /> Back To Signup
            </Link>
            <button
              className="flex items-center text-blue-600 hover:text-blue-800 transition-all"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer className="mr-1" /> Resend Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;
