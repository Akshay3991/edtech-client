import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm.jsx"
import SignupForm from "./SignupForm.jsx"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="flex min-h-screen pt-6 sm:pt-0  w-full items-center justify-center bg-[whitesmoke] px-4 sm:px-6 lg:px-12">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-full max-w-[90vw] flex-col-reverse items-center gap-8 py-12 md:flex-row md:gap-12 lg:max-w-[80vw]">
          {/* Left Content */}
          <div className="w-full max-w-[90%] sm:text-center md:w-1/2 md:max-w-[40vw] md:text-left">
            <h1 className="text-2xl font-black text-[black] sm:text-4xl lg:text-[44px]">
              {title}
            </h1>
            <p className="sm:mt-4 text-[1rem] leading-[1.5rem] sm:text-[1.125rem] sm:leading-[1.625rem]">
              <span className="text-[#FF1949]">{description1}</span>{" "}
              <span className="font-thin italic text-[#0c0101]">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>

          {/* Right Image Container */}
          <div className="w-full max-w-[90%] h-[45vh] rounded-[20px] bg-white shadow-xl shadow-black md:w-1/2 md:max-w-[35vw] lg:h-[60vh] animate-float">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="absolute top-1/2 left-1/2  max-w-full rounded-[20px] transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute right-4 top-1/2 z-10 w-auto max-w-full rounded-[20px] transform -translate-y-1/2"
            />
          </div>
        </div>
      )}
    </div>

  )
}

export default Template
