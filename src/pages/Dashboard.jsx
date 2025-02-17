import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { useState } from "react"
import Sidebar from "../components/core/Dashboard/Sidebar.jsx"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="relative flex py-10 bg-[whitesmoke] min-h-[calc(100vh-3.5rem)] flex-col md:flex-row">
      {/* Sidebar - Hidden on mobile, shown on medium (md) and larger screens */}
      <aside className="hidden md:block pt-3">
        <Sidebar />
      </aside>

      {/* Sidebar toggle button for mobile */}
      <div className="md:hidden  absolute w-[100vw] bg-[white]  top-14 left-4 z-50">
        {/* Sidebar Toggle Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed  p-1 w-[90%] mx-auto text-start bg-[white] text-black font-black rounded-lg shadow-lg hover:bg-blue-700"
        >
          ☰
        </button>
      </div>

      {/* Sidebar for mobile (absolute positioning) */}
      <aside
        className={`absolute top-0 left-0 h-full w-64 bg-[white] shadow-lg transform transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        <Sidebar />
      </aside>

      {/* Main content area */}
      <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto px-4 md:px-8">
        <div className="mx-auto w-full max-w-[1000px] py-8">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default Dashboard
