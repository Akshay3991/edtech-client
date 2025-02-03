import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template.jsx"

function Signup() {
  return (
    <Template
      title="Join the millions learning with EducationMart for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
