import "./ShopServices.css";
import { GiTrophyCup } from "react-icons/gi";
import { BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";


const ShopServices = () => {
  return (
    <div className="shop-services">
      <div className="services">
        <div className="service-icon">
          <GiTrophyCup />
        </div>
        <div className="service-info">
          <h2>High Quality</h2>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="services">
        <div className="service-icon">
          <BsPatchCheck />
        </div>
        <div className="service-info">
          <h2>Warranty Protection</h2>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="services">
        <div className="service-icon">
          <TbTruckDelivery />
        </div>
        <div className="service-info">
          <h2>Free Shipping</h2>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="services">
        <div className="service-icon">
            <BiSupport />
        </div>
        <div className="service-info">
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default ShopServices;
