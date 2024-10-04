import "./Header.css"
import { FaRegUser } from "react-icons/fa6";
import { CiSearch, CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </div>
      <div className="header-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div className="header-icons">
        <FaRegUser className="icon"/>
        <CiSearch className="icon"/>
        <CiHeart className="icon"/>
        <FiShoppingCart className="icon"/>
      </div>
    </div>
  )
}

export default Header
