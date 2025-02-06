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
import ReviewSlider from "../components/Common/ReviewSlider.jsx"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection.jsx"
import LearningGrid from "../components/core/AboutPage/LearningGrid.jsx"
import StatsComponenet from "../components/core/AboutPage/Stats.jsx"

const About = () => {
  return (
    <div>
      <section className="w-[100vw] h-[30rem] bg-[white]">
        <div className="w-[100%] mt-[90px] h-[18%] bg-[#FF1949]">
          <nav className="w-[66%] flex h-[100%] items-center  mx-auto  text-[white] font-inter text-[15px]">
            <div className="flex w-[95%] justify-center gap-[45px]">
              <ul className="flex gap-[9px] items-center h-[100%]">
                <li><FaPhoneVolume className="text-[24px]" /></li>
                <li>
                  <h1>Contact Support</h1>
                  <h2 className="font-black">91+ 9992424806</h2>
                </li>
              </ul>
              <ul className="flex gap-[9px] items-center h-[100%">
                <li><FaLocationDot className="text-[24px]" /></li>
                <li>
                  <h1>Address</h1>
                  <h2 className="font-black">Cdlsiet,Panniwala Mota </h2>
                </li>
              </ul>
              <ul className="flex gap-[9px] items-center h-[100%">
                <li><MdEmail className="text-[24px]" /></li>
                <li>
                  <h1>Email</h1>
                  <h2 className="font-black">educationmart03@gmail.com</h2>
                </li>

              </ul>
            </div>
            <div className="">
              <button className="bg-[white] text-[20px] gap-[3px]  flex text-[#FF1949] p-[6px] font-bold">
                <a href="/login" className="flex items-center">
                  <IoLogIn className="" />
                  Login
                </a>
              </button>
            </div>
          </nav>
        </div>
        <section className="relative w-[100vw] h-[82%] ">
          <img src={BannerImage3} className=" absolute z-0 w-[100%] h-[100%] brightness-50" alt="bannerimg" />
          <div className="absolute w-[100%] h-[100%] bg-[black] opacity-[0.6]">
            <ul className="absolute left-[70px] text-[white] top-[200px] w-[20%] h-[20%] bg-transparent">
              <li>
                <a href="/" className="text-[20px] font-bold">
                  Home > <span className="text-[24px] font-black">About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="w-[100vw] h-[40rem] bg-[whitesmoke]">
        <div className="flex w-[80%] ml-auto pt-[60px]">
          <header className="w-[35%] p-[30px] ">
            <h3 className="text-[#FF1949] font-semibold uppercase">About Us</h3>
            <h1 className="text-[black] font-black font-sans text-[42px]">
              Learn New Skills to Go Ahead for Your Career
            </h1>
            <p className="pt-[20px] text-[#252525] text-justify font-inter font-normal">
              At <b>Education Mart</b>, we believe that learning new skills is the cornerstone of personal and professional growth. In a world that’s constantly evolving, staying ahead in your career requires adaptability, curiosity, and a commitment to self-improvement. That’s why we’re dedicated to providing the tools, resources, and guidance you need to unlock your full potential and achieve your career goals. Whether you’re just starting out or looking to take the next step, we’re here to help you go further, faster.
            </p>
          </header>
          <div className="w-[63%] relative ">
            <img src={BannerImage1}
              className="absolute w-[20rem] h-auto transform rotate-6 bottom-[0] shadow-xl shadow-black  rounded-lg"
              alt="" />
            <img
              className="absolute w-[60%] h-auto transform -rotate-6 right-[10px] shadow-xl shadow-black rounded-lg"
              src={BannerImage2} alt="" />
          </div>
        </div>
      </section>

      <section className="aboutus_bg">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10">
          <div className="flex flex-col items-center gap-6 lg:flex-row justify-between">
            <div className="my-14 text-[whitesmoke] flex lg:w-[50%] flex-col gap-8">
              <h1 className="text-[white] text-[50px] font-black font-sans">
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

            <div className="bg-[whitesmoke] w-[35rem] shadow-2xl shadow-black rounded-2xl ">
              <img
                src={FoundingStory}
                alt=""
                className="shadow-lg  shadow-[#0a0a0a] rounded-xl rotate-12"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 text-[whitesmoke] lg:flex-row justify-between">
            <div className="my-8 flex lg:w-[40%] flex-col gap-6">
              <h1 className="text-[white] text-[50px] font-black font-sans">
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
              <h1 className="text-[white] text-[50px] font-black font-sans ">
                Our Mission
              </h1>
              <p className="text-justify  font-normal font-sans italic">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[100vw] h-[70rem] bg-[white]">
        <div className="flex w-[70%] h-[90%] mx-auto pt-[60px]">
          <div className="w-[63%] relative ">
            <img src={TimelineImage}
              className="absolute w-[38rem]  transform rotate-6 top-[0] shadow-xl shadow-black  rounded-lg"
              alt="" />
            <img src={BannerImage2}
              className="absolute w-[38rem]  transform rotate-6 bottom-[0] shadow-xl shadow-black  rounded-lg"
              alt="" />
          </div>
          <header className="w-[45%] h-[100%]  ">
            <ol className="text-[#070101]  font-normal  font-sans text-[18px]">
              <li className="mb-12">
                <h1 className="text-[#020101] text-[22px] pt-[14px] font-black">A Better Future Starts Here</h1>
                <p className="text-justify italic">where innovation meets action, and every step we take today shapes a brighter tomorrow. Together, we’re building a world of possibilities, one idea at a time.</p>
              </li>
              <li className="mb-12">
                <h1 className="text-[#020101] text-[22px] pt-[14px] font-black">A Classical Education For The Future</h1>
                <p className="text-justify italic">A Classical Education for the Future bridges timeless wisdom with modern innovation, equipping students with the critical thinking, creativity, and values to thrive in an ever-changing world. Rooted in tradition, designed for tomorrow.</p>
              </li>
              <li className="mb-12">
                <h1 className="text-[#020101] text-[22px] pt-[14px]  font-black">A Journey To Excellence</h1>
                <p className="text-justify italic">continuous process of self-improvement, learning, and innovation to achieve the highest standards in any field. It requires dedication, perseverance, and a commitment to growth and excellence</p>
              </li>
              <li className="mb-12">
                <h1 className="text-[#020101] text-[22px] pt-[14px] font-black">A Success Oriented Learning Environment</h1>
                <p className="text-justify italic">fosters motivation, innovation, and critical thinking, ensuring learners achieve their full potential. It emphasizes goal-setting, personalized learning, and continuous improvement</p>
              </li>
              <li className="mb-12">
                <h1 className="text-[#020101] text-[22px] pt-[14px] font-black">Academic Excellence and Cultural Diversity</h1>
                <p className="text-justify italic">create a dynamic learning environment that promotes high intellectual standards while embracing diverse perspectives. This synergy fosters innovation, inclusivity, and global understanding</p>
              </li>
            </ol>

          </header>

        </div>
      </section>
      <StatsComponenet />
      <section className="bg-[whitesmoke] w-[100vw] h-[100rem] text-[black]">
        <LearningGrid />
        <ContactFormSection />
      </section>
      <Footer />
    </div>
  )
}

export default About
