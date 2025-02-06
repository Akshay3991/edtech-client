import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm.jsx";

const ContactFormSection = () => {
  return (
    <div className="mt-8 w-[60%] mx-auto h-[45rem] p-[30px] shadow-2xl shadow-black rounded-lg bg-[white]">
      <h1 className="text-center text-[black] text-4xl font-black">Get in Touch</h1>
      <p className="text-center text-[#252525] mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="w-[70%] h-[60%] mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
