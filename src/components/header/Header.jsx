import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src="../../../src/assets/logo.png" alt="Logo" />
      </div>
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="header-icons">
        <form>
          <input type="text" placeholder="Search" />
          <CiSearch className="icon icon11" />
        </form>
        <Link to="/cart">
          <FiShoppingCart className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
