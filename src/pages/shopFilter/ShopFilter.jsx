import "./ShopFilter.css";
import { VscSettings } from "react-icons/vsc";
import { HiViewGrid } from "react-icons/hi";
import { BsViewList } from "react-icons/bs";

const ShopFilter = () => {
  return (
    <div className="shop-filter">
      <div className="filter-1">
        <div className="filter-1-icons">
          <VscSettings className="icons"/>
          <h3>Filter</h3>
          <HiViewGrid className="icons"/>
          <BsViewList className="icons"/>
        </div>
        <div className="filter-1-text">
          <h3>Showing 1–16 of 32 results</h3>
        </div>
      </div>
      <div className="filter-2">
        <div className="filter-2-cart">
          <div className="cart-info1">
            <h3>Show</h3>
          </div>
          <div className="cart-info2">
            <span>16</span>
          </div>
        </div>
        <div className="filter-2-cart">
          <div className="cart-info1">
            <h3>Sort by</h3>
          </div>
          <div className="cart-info2">
            <span>Default</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
