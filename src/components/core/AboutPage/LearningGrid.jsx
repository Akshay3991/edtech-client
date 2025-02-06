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
    <div className="w-[76%] pt-[100px] mx-auto">
      <div className="grid mx-auto  w-fit grid-cols-4 mb-12">
        {LearningGridArray.map((card, i) => {
          return (
            <div
              key={i}
              className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${card.order % 2 === 1
                ? "bg-[#135429] h-[294px]"
                : card.order % 2 === 0
                  ? "bg-richblack-800 h-[294px]"
                  : "bg-transparent"
                } ${card.order === 3 && "xl:col-start-2"}  `}
            >
              {card.order < 0 ? (
                <div className="text-justify w-[30vw]">
                  <h1 className="text-[black] font-black font-sans text-[40px]">
                    {card.heading}
                  </h1>
                  <p className="pt-[20px] text-[#252525] font-inter font-normal">
                    {card.description}
                  </p>

                  <div className="w-fit mt-2">
                    <CTAButton active={true} linkto={card.BtnLink}>
                      {card.BtnText}
                    </CTAButton>
                  </div>
                </div>
              ) : (
                <div className="p-8 flex flex-col gap-8">
                  <h1 className="text-lg text-justify text-[whitesmoke] font-inter font-normal">{card.heading}</h1>

                  <p className="text-[white] font-[200]">
                    {card.description}
                  </p>
                </div>
              )
              }
            </div>
          );
        })}
      </div>
    </div >

  );
};

export default LearningGrid;
