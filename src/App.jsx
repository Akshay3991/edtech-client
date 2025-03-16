import { useEffect } from "react"
import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

// Components
import ConfirmationModal from "./components/Common/ConfirmationModal.jsx"
import LogoutModal from "./components/Common/LogoutModal.jsx"
import Navbar from "./components/Common/Navbar.jsx"
import OpenRoute from "./components/core/Auth/OpenRoute.jsx"
import PrivateRoute from "./components/core/Auth/PrivateRoute.jsx"
import AddCourse from "./components/core/Dashboard/AddCourse"
import Cart from "./components/core/Dashboard/Cart"
import EditCourse from "./components/core/Dashboard/EditCourse"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses.jsx"
import Instructor from "./components/core/Dashboard/Instructor.jsx"
import MyCourses from "./components/core/Dashboard/MyCourses.jsx"
import MyProfile from "./components/core/Dashboard/MyProfile.jsx"
import Settings from "./components/core/Dashboard/Settings"
import VideoDetails from "./components/core/ViewCourse/VideoDetails.jsx"
import About from "./pages/About.jsx"
import Catalog from "./pages/Catalog.jsx"
import Contact from "./pages/Contact.jsx"
import CourseDetails from "./pages/CourseDetails.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Error from "./pages/Error.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx"
import SellerStore from "./components/core/Dashboard/sellerstore/SellerStore.jsx"
import PurchasedProducts from "./components/core/Dashboard/Buyerorders/PurchasedProducts.jsx"
import UpdateProduct from "./components/core/UpdateProducts.jsx"
// Pages
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import UpdatePassword from "./pages/UpdatePassword.jsx"
import VerifyEmail from "./pages/VerifyEmail.jsx"
import ProductUploader from "./components/core/Dashboard/ProductUpload/ProductUploader.jsx"
import Marketplace from "./pages/Marketplace.jsx"
import ViewCourse from "./pages/ViewCourse.jsx"
import { getUserDetails } from "./services/operations/profileAPI.js"
import { ACCOUNT_TYPE } from "./utils/constants.js"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route path="dashboard/confirm" element={<ConfirmationModal />} />
          <Route path="dashboard/logout" element={<LogoutModal />} />
          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
          {/* Route only for Sellers */}
          {user?.accountType === ACCOUNT_TYPE.SELLER && (
            <>
              <Route path="/dashboard/productupload" element={<ProductUploader />} />
              <Route path="/dashboard/sellerStore" element={<SellerStore />} />
            </>
          )}
          <Route path="/purchased-products" element={<PurchasedProducts />} />
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
