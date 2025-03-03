import React from "react";
import CTAButton from "../../../components/core/HomePage/Button.jsx";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for Everyone, Everywhere",
    description:
      "At Education Mart, we believe that world-class learning should be accessible to everyone, everywhere. Our platform is designed to break down barriers and empower learners of all ages, backgrounds, and locations to achieve their full potential. Here’s how we deliver world-class learning",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Builds a strong academic foundation and prepares students for future success.",
  },
  {
    order: 2,
    heading: "Multilingual courses and affordable learning options.",
    description:
      "Makes quality education accessible to Everyone",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Recognized credentials that add value to resumes and career profiles",
  },
  {
    order: 4,
    heading: `Educators`,
    description:
      "Empowers educators to innovate and deliver impactful learning experiences",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Education Mart partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[76%] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {LearningGridArray.map((card, i) => {
          return (
            <div
              key={i}
              className={`${i === 0 ? "lg:col-span-2 lg:h-[294px]" : ""}  
                      ${card.order % 2 === 1 ? "bg-[#135429] h-auto md:h-[250px] lg:h-[294px]"
                  : "bg-richblack-800 h-auto md:h-[250px] lg:h-[294px]"}  
                      ${card.order === 3 ? "lg:col-start-2" : ""}  
                      p-4 rounded-lg`}
            >
              {card.order < 0 ? (
                <div className="text-justify w-full md:w-[70%] lg:w-[30vw]">
                  <h1 className="text-[white] font-black font-sans text-2xl md:text-3xl lg:text-4xl">
                    {card.heading}
                  </h1>
                  <p className="pt-4 text-[#dbd8d8] font-inter font-normal text-sm md:text-base">
                    {card.description}
                  </p>
                  <div className="w-fit mt-2">
                    <CTAButton active={true} linkto={card.BtnLink}>
                      {card.BtnText}
                    </CTAButton>
                  </div>
                </div>
              ) : (
                <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6">
                  <h1 className="text-base md:text-lg text-justify text-[whitesmoke] font-inter font-normal">
                    {card.heading}
                  </h1>
                  <p className="text-[white] font-light text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>


  );
};

export default LearningGrid;
