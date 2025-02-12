import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CountryCode from "../../../data/countrycode.json"
import { apiConnector } from "../../../services/apiConnector.js"
import { contactusEndpoint } from "../../../services/apis.js"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true)
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      )
      // console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className="flex flex-col gap-2 sm:gap-5"
      onSubmit={handleSubmit(submitContactForm)}
    >
      {/* First & Last Name */}
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex flex-col gap-2 sm:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter first name"
            className="form-style w-full"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="text-[12px] text-red-500">Please enter your name.</span>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter last name"
            className="form-style w-full"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email address"
          className="form-style w-full"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-[12px] text-red-500">Please enter your Email address.</span>
        )}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">Phone Number</label>
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Country Code Dropdown */}
          <select
            id="countrycode"
            className="form-style w-full sm:w-[30%]"
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((ele, i) => (
              <option key={i} value={ele.code}>{ele.code} - {ele.country}</option>
            ))}
          </select>

          {/* Phone Number Input */}
          <input
            type="number"
            id="phonenumber"
            placeholder=" "
            className="form-style w-full sm:w-[70%]"
            {...register("phoneNo", {
              required: { value: true, message: "Please enter your Phone Number." },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
          />
        </div>
        {errors.phoneNo && (
          <span className="text-[12px] text-red-500">{errors.phoneNo.message}</span>
        )}
      </div>

      {/* Message Box */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">Message</label>
        <textarea
          id="message"
          cols="30"
          rows="5"
          placeholder="Enter your message here"
          className="form-style w-full"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="text-[12px] text-red-500">Please enter your Message.</span>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-[red] px-6 py-3 text-center text-sm sm:text-base font-bold text-white shadow-xl shadow-red-500
      ${!loading && "transition-transform duration-200 hover:scale-95 hover:shadow-none"}
      disabled:bg-gray-500 `}
      >
        Send Message
      </button>
    </form>

  )
}

export default ContactUsForm
