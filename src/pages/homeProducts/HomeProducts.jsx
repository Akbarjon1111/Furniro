import "./HomeProducts.css";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  return (
    <div className="home-products">
      <h1>Our Products</h1>
      <div className="product-carts">
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/image 1.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Syltherine</h3>
            <p>Stylish cafe chair</p>
            <h4>Rp 2.500.000</h4>
            <span>
              <del>Rp 3.500.000</del>
            </span>
          </div>
        </div>
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/images.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Leviosa</h3>
            <p>Stylish cafe chair</p>
            <h4>Rp 2.500.000</h4>
            <span>
              <del>Rp 3.500.000</del>
            </span>
          </div>
        </div>
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/images (1).png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Lolito</h3>
            <p>Luxury big sofa</p>
            <h4>Rp 7.000.000</h4>
            <span>
              <del>Rp 14.000.000</del>
            </span>
          </div>
        </div>
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/images (2).png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Respira</h3>
            <p>Outdoor bar table and stool</p>
            <h4>Rp 500.000</h4>
            <span>
              <del>Rp 1.000.000</del>
            </span>
          </div>
        </div>
      </div>
      <div className="product-carts">
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/image 5.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Grifo</h3>
            <p>Night lamp</p>
            <h4>Rp 1.500.000</h4>
            <span>
              <del>Rp 3.500.000</del>
            </span>
          </div>
        </div>
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/image 6.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Muggo</h3>
            <p>Small mug</p>
            <h4>Rp 150.000</h4>
            <span>
              <del>Rp 500.000</del>
            </span>
          </div>
        </div>
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/image 7.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Pingky</h3>
            <p>Cute bed set</p>
            <h4>Rp 7.000.000</h4>
            <span>
              <del>Rp 14.000.000</del>
            </span>
          </div>
        </div>
        <div className="cart-1">
          <div className="cart-img">
            <img src="../../../src/assets/image 8.png" alt="" />
          </div>
          <div className="cart-info">
            <h3>Potty</h3>
            <p>Minimalist flower pot</p>
            <h4>Rp 500.000</h4>
            <span>
              <del>Rp 1.000.000</del>
            </span>
          </div>
        </div>
      </div>
      <Link to="/shop"><button className="btn">Show More</button></Link>
    </div>
  );
};

export default HomeProducts;
