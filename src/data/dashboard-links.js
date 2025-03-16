import { ACCOUNT_TYPE } from "../utils/constants.js"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Add Product",
    path: "/dashboard/productupload",
    type: ACCOUNT_TYPE.SELLER,
    icon: "VscAdd",
  },
  {
    id: 3,
    name: "Store",
    path: "/dashboard/sellerStore",
    type: ACCOUNT_TYPE.SELLER,
    icon: "VscDatabase",
  },
  {
    id: 4,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 5,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 6,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 7,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 8,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscArchive",
  },
  {
    id: 9,
    name: "Orders",
    path: "/purchased-products",
    icon: "VscInbox",
  },

]
