import React from "react"
import { IoLogIn } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import TimelineImage from "../assets/Images/TimelineImage.png"
import Footer from "../components/Common/Footer.jsx"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection.jsx"
import LearningGrid from "../components/core/AboutPage/LearningGrid.jsx"
import StatsComponenet from "../components/core/AboutPage/Stats.jsx"

const About = () => {
  return (
    <div>
      <section className="w-full h-auto bg-white">
        {/* Contact Info Bar */}
        <div className="w-full mt-[62px] h-auto bg-[#FF1949] py-4">
          <nav className="w-[90%] md:w-[80%] lg:w-[66%] flex flex-wrap md:flex-nowrap justify-between items-center mx-auto text-white font-inter text-sm md:text-[15px]">
            <div className="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between gap-6 md:gap-12 lg:gap-[45px]">
              {/* Contact */}
              <ul className="flex gap-3 items-center">
                <li><FaPhoneVolume className="text-xl md:text-2xl" /></li>
                <li>
                  <h1 className="text-xs md:text-sm">Contact Support</h1>
                  <h2 className="font-black text-sm md:text-base">91+ 9992424806</h2>
                </li>
              </ul>
              {/* Address */}
              <ul className="flex gap-3 items-center">
                <li><FaLocationDot className="text-xl md:text-2xl" /></li>
                <li>
                  <h1 className="text-xs md:text-sm">Address</h1>
                  <h2 className="font-black text-sm md:text-base">Cdlsiet, Panniwala Mota</h2>
                </li>
              </ul>
              {/* Email */}
              <ul className="flex gap-3 items-center">
                <li><MdEmail className="text-xl md:text-2xl" /></li>
                <li>
                  <h1 className="text-xs md:text-sm">Email</h1>
                  <h2 className="font-black text-sm md:text-base">educationmart03@gmail.com</h2>
                </li>
              </ul>
            </div>
            {/* Login Button */}
            <div className="mt-2 w-full sm:w-[10%] bg-white  md:mt-0 px-3 py-2 font-bold rounded-md">
              <button className="text-[14px] md:text-[18px] flex items-center gap-1 text-[#FF1949] ">
                <IoLogIn className="text-lg" />
                <a href="/login">Login</a>
              </button>
            </div>
          </nav>
        </div>

        {/* Banner Section */}
        <div className="relative w-full h-[20rem] md:h-[25rem] lg:h-[30rem]">
          <img
            src={BannerImage3}
            className="absolute z-0 w-full h-full object-cover brightness-50"
            alt="bannerimg"
          />
          <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-start pl-5 md:pl-10">
            <ul className="text-white bg-transparent">
              <li>
                <a href="/" className="text-lg md:text-xl font-bold">
            Home > <span className="text-xl md:text-2xl font-black">About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="w-full h-auto bg-[whitesmoke] py-8">
        <div className="flex  w-[90%] sm:w-[80%] lg:w-[80%]  mx-auto pt-6 lg:pt-16 gap-10 lg:gap-0">
          {/* Left Content (Text) */}
          <header className="w-[60%] sm:w-[40%] lg:w-[40%] p-2 lg:p-4 text-left">
            <h3 className="text-[#FF1949] font-semibold uppercase text-sm md:text-base">About Us</h3>
            <h1 className="text-black font-black font-sans text-2xl md:text-3xl lg:text-4xl">
              Learn New Skills to Go Ahead for Your Career
            </h1>
            <p className="pt-4 text-[#252525] text-justify font-inter font-normal text-sm md:text-base">
              At <b>Education Mart</b>, we believe that learning new skills is the cornerstone of personal and professional growth. In a world that’s constantly evolving, staying ahead in your career requires adaptability, curiosity, and a commitment to self-improvement. That’s why we’re dedicated to providing the tools, resources, and guidance you need to unlock your full potential and achieve your career goals. Whether you’re just starting out or looking to take the next step, we’re here to help you go further, faster.
            </p>
          </header>

          {/* Right Content (Images) */}
          <div className="w-[40%] sm:w-[60%]  lg:w-[60%] relative  flex ">
            <div className="relative w-full bg-white">
              <img
                src={BannerImage1}
                className="absolute w-full md:w-[50%]  lg:w-[40%] transform rotate-6 sm:bottom-0 sm:right-0 bottom-[28%] md:left-10 shadow-xl shadow-black rounded-lg"
                alt="Banner 1"
              />
              <img
                src={BannerImage2}
                className="absolute w-full md:w-[70%] lg:w-[45%] transform -rotate-6 sm:top-0 top-[22%] right-[10%] shadow-xl shadow-black rounded-lg"
                alt="Banner 2"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="aboutus_bg">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10">
          <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
            <div className="my-14 text-[whitesmoke] flex lg:w-[50%] flex-col gap-8">
              <h1 className="text-[white] text-[40px] sm:text-[50px] font-black font-sans">
                Our Founding Story
              </h1>
              <p className="text-justify  font-normal font-sans italic">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-justify font-inter italic">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div className="bg-[whitesmoke] w-[25rem] sm:w-[35rem] md:w-[30rem] lg:w-[35rem] shadow-2xl shadow-black rounded-2xl ">
              <img
                src={FoundingStory}
                alt=""
                className="shadow-lg  shadow-[#0a0a0a] rounded-xl rotate-12"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 text-[whitesmoke] lg:flex-row justify-between">
            <div className="my-8 flex lg:w-[40%] flex-col gap-6">
              <h1 className="text-[white] text-[40px] sm:text-[50px] font-black font-sans">
                Our Vision
              </h1>
              <p className="text-justify  font-normal font-sans italic">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-8 flex lg:w-[40%]  flex-col gap-6">
              <h1 className="text-[white] text-[40px] sm:text-[50px] font-black font-sans ">
                Our Mission
              </h1>
              <p className="text-justify  font-normal font-sans italic">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100vw] h-auto bg-[white]">
        <div className="flex w-[90%] sm:w-[70%] py-8 gap-3  sm:py-16 mx-auto">
          <div className="w-[40%] sm:w-[60%] relative ">
            <img src={TimelineImage}
              className="absolute w-[34rem]  transform rotate-6 sm:top-[0] top-[30%] shadow-xl shadow-black  rounded-lg"
              alt="" />
            <img src={BannerImage2}
              className="absolute w-[34rem]  transform rotate-6 sm:bottom-[13%] bottom-[30%] shadow-xl shadow-black  rounded-lg"
              alt="" />
          </div>
          <header className="w-[60%] p-4 sm:w-[45%] bg-[whitesmoke]">
            <ol className="text-[#070101]  font-normal  font-sans text-[14px] sm:text-[18px]">
              <li className="sm:mb-12">
                <h1 className="text-[#020101] text-[18px] sm:text-[22px]  pt-[12px] sm:pt-[14px] font-black">A Better Future Starts Here</h1>
                <p className="text-justify italic">where innovation meets action, and every step we take today shapes a brighter tomorrow. Together, we’re building a world of possibilities, one idea at a time.</p>
              </li>
              <li className="sm:mb-12">
                <h1 className="text-[#020101] text-[18px] sm:text-[22px] pt-[12px] sm:pt-[14px] font-black">A Classical Education For The Future</h1>
                <p className="text-justify italic">A Classical Education for the Future bridges timeless wisdom with modern innovation, equipping students with the critical thinking, creativity, and values to thrive in an ever-changing world. Rooted in tradition, designed for tomorrow.</p>
              </li>
              <li className="sm:mb-12">
                <h1 className="text-[#020101] text-[18px] sm:text-[22px] pt-[12px] sm:pt-[14px]  font-black">A Journey To Excellence</h1>
                <p className="text-justify italic">continuous process of self-improvement, learning, and innovation to achieve the highest standards in any field. It requires dedication, perseverance, and a commitment to growth and excellence</p>
              </li>
              <li className="sm:mb-12">
                <h1 className="text-[#020101] text-[18px] sm:text-[22px] pt-[12px] sm:pt-[14px] font-black">A Success Oriented Learning Environment</h1>
                <p className="text-justify italic">fosters motivation, innovation, and critical thinking, ensuring learners achieve their full potential. It emphasizes goal-setting, personalized learning, and continuous improvement</p>
              </li>
              <li className="sm:mb-12">
                <h1 className="text-[#020101] text-[18px] sm:text-[22px] pt-[12px] sm:pt-[14px] font-black">Academic Excellence and Cultural Diversity</h1>
                <p className="text-justify italic">create a dynamic learning environment that promotes high intellectual standards while embracing diverse perspectives. This synergy fosters innovation, inclusivity, and global understanding</p>
              </li>
            </ol>

          </header>

        </div>
      </section>
      <StatsComponenet />
      <section className="bg-[whitesmoke] w-[100vw] h-auto py-8 text-[black]">
        <LearningGrid />
      </section>
      <section className="bg-[whitesmoke] w-[100vw] h-auto py-5 sm:py-8 text-[black]">
        <ContactFormSection />
      </section>
      <Footer />
    </div>
  )
}

export default About
