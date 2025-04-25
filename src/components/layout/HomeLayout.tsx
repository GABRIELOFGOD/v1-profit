import { Outlet } from "react-router-dom"
import Header from "./Header"

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-3 py-10">
        <Outlet />
      </div>
    </div>
  )
}
export default HomeLayout