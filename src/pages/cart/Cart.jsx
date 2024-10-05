import "./Cart.css";
import { FaChevronRight } from "react-icons/fa";
import ShopServices from "../shopServices/ShopServices";
import CartProducts from "../cartProducts/CartProducts";


const Cart = () => {
  return (
    <div>
      <div className="cart-home">
        <h1>Cart</h1>
        <div className="home-div">
          <p>Home</p>
          <FaChevronRight />
          <span>Cart</span>
        </div>
      </div>

      <CartProducts />
      <ShopServices />
    </div>
  );
};

export default Cart;
