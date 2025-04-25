import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="my-auto">
      <p className="text-xl font-extrabold my-auto">V1 <span className="text-primary">Profit</span></p>
    </Link>
  )
}
export default Logo