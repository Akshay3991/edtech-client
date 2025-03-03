import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm.jsx";

const ContactFormSection = () => {
  return (
    <div className="w-[90%] p-8 sm:w-[80%] lg:w-[60%] mx-auto min-h-[40rem] sm:min-h-[45rem] px-4 sm:px-[30px] shadow-2xl shadow-black rounded-lg bg-white">
      <h1 className="text-center text-black text-3xl sm:text-4xl font-black">Get in Touch</h1>
      <p className="text-center text-[#252525] text-sm sm:text-base">
        We'd love to hear from you, Please fill out this form.
      </p>
      <div className="w-full sm:w-[80%] pt-[30px] lg:w-[70%] min-h-[50%] mx-auto">
        <ContactUsForm />
      </div>
    </div>

  );
};

export default ContactFormSection;
