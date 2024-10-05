import "./ShopHome.css";
import { FaChevronRight } from "react-icons/fa";
import ShopFilter from "../../../src/pages/shopFilter/ShopFilter";
import ShopProducts from "../shopProducts/ShopProducts";
import ShopServices from "../shopServices/ShopServices";

const ShopHome = () => {
  return (
    <div className="shop">
      <div className="shop-home">
        <h1>Shop</h1>
        <div className="home-div">
          <p>Home</p>
          <FaChevronRight />
          <span>Shop</span>
        </div>
      </div>

      <ShopFilter />
      <ShopProducts />
      <ShopServices />
    </div>
  );
};

export default ShopHome;
