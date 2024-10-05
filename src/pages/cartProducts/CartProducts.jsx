import "./CartProducts.css";
import { AiOutlineDelete } from "react-icons/ai";

const CartProducts = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="product-title">
          <h2>Product</h2>
          <h2 className="pr">Price</h2>
          <h2 className="qn">Quantity</h2>
          <h2 className="sb">Subtotal</h2>
        </div>
        <div className="product-info">
          <img src="../../../src/assets/Group 146.png" alt="" />
          <h3 className="sofa">Asgaard sofa</h3>
          <h3 className="nr">Rs. 250,000.00</h3>
          <label>
            <input type="radio" name="size" />
            <span>1</span>
          </label>
          <h4 className="xr">Rs. 250,000.00</h4>
          <AiOutlineDelete className="pr-icon"/>
        </div>
      </div>
      <div className="cart-total">
        <h1>Cart Totals</h1>
        <div className="subtotal">
            <h2>Subtotal</h2>
            <p>Rs. 250,000.00</p>
        </div>
        <div className="total">
            <h2>Total</h2>
            <h3>Rs. 250,000.00</h3>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
};

export default CartProducts;
