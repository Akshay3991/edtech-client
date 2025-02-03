import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm.jsx"
import SignupForm from "./SignupForm.jsx"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid w-[100vw] h-[100vh] bg-[white] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-[80vw] justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-[40vw] md:mx-0">
            <h1 className="text-[44px] font-black font-sans text-[black]">
              {title}
            </h1>
            <p className=" text-[1.125rem] font-inter leading-[1.625rem]">
              <span className="text-[#FF1949]">{description1}</span>{" "}
              <span className="font-thin italic text-[#0c0101]">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative  rounded-[20px] w-[35vw] h-[60vh] bg-[white] shadow-xl shadow-black md:mx-0 animate-float">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
              className="absolute top-1/2 left-1/2 rounded-[20px] transform -translate-x-1/2 -translate-y-1/2"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute rounded-[20px]  right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
