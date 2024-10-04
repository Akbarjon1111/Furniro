import "./BrowseTheRange.css";

const BrowseTheRange = () => {
  return (
    <div className="range">
      <div className="range-info">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="range-carts">
        <div className="cart">
          <img src="../../../src/assets/dining.png" alt="" />
          <h3>Dining</h3>
        </div>
        <div className="cart">
          <img src="../../../src/assets/living.png" alt="" />
          <h3>Living</h3>
        </div>
        <div className="cart">
          <img src="../../../src/assets/bedroom.png" alt="" />
          <h3>Bedroom</h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRange;
