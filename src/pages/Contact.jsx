import React from "react"

import Footer from "../components/Common/Footer.jsx"
import ReviewSlider from "../components/Common/ReviewSlider.jsx"
import ContactDetails from "../components/core/ContactUsPage/ContactDetails.jsx"
import ContactForm from "../components/core/ContactUsPage/ContactForm.jsx"

const Contact = () => {
  return (
    <div className="bg-[whitesmoke] ">
      <div className="mx-auto mt-20 p-[80px] flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
