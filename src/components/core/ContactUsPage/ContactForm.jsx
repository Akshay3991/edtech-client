import React from "react";
import ContactUsForm from "./ContactUsForm.jsx";

const ContactForm = () => {
  return (
    <div className="bg-[white] shadow-2xl shadow-[grey] text-[#0e0d0d] rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-[40px] leading-10 font-sans font-black text-[black]">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
