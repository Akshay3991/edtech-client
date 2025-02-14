import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Sidebar from "../components/core/Dashboard/Sidebar.jsx"

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)


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
